import { useEffect, useMemo, useRef, useState } from "react";
import "./credit-experience-section.css";
import meshGrid from "../../../../assets/mesh-grid.svg";
import CreditSuitePanel from "./CreditSuitePanel";
import OrchestrationPanel from "./OrchestrationPanel";
import ProcessPanel, { phases } from "./ProcessPanel";

function CreditExperienceSection() {
  const [stageIndex, setStageIndex] = useState(0);
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [barRect, setBarRect] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });
  const [barVertical, setBarVertical] = useState(false);
  const sectionRef = useRef(null);
  const lockRef = useRef(false);
  const phasesRef = useRef(null);
  const phaseRefs = useRef([]);
  const barRectRef = useRef({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });
  const updateBarRef = useRef(null);
  const pillTimerRef = useRef(null);
  const progress = useMemo(
    () => (phaseIndex / (phases.length - 1)) * 100,
    [phaseIndex]
  );
  const progressScale = useMemo(() => progress / 100, [progress]);

  useEffect(() => {
    barRectRef.current = barRect;
  }, [barRect]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const isCentered = () => {
      const rect = section.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const offset = Math.abs(rect.top + rect.height / 2 - viewportCenter);
      return offset < 120;
    };

    const onWheel = (event) => {
      if (!lockRef.current) return;
      const direction = Math.sign(event.deltaY);
      if (direction === 0) return;

      if (stageIndex < 2) {
        if (direction > 0) {
          event.preventDefault();
          setStageIndex((prev) => Math.min(prev + 1, 2));
        } else if (direction < 0 && stageIndex > 0) {
          event.preventDefault();
          setStageIndex((prev) => Math.max(prev - 1, 0));
        }
        return;
      }

      if (stageIndex === 2) {
        if (direction > 0 && phaseIndex < phases.length - 1) {
          event.preventDefault();
          setPhaseIndex((prev) => Math.min(prev + 1, phases.length - 1));
        } else if (direction < 0) {
          if (phaseIndex > 0) {
            event.preventDefault();
            setPhaseIndex((prev) => Math.max(prev - 1, 0));
          } else {
            event.preventDefault();
            setStageIndex(1);
          }
        }
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          lockRef.current = false;
          return;
        }
        lockRef.current = isCentered();
      },
      { threshold: 0 }
    );

    observer.observe(section);

    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.bottom <= 0 || rect.top >= window.innerHeight) {
        lockRef.current = false;
        return;
      }
      lockRef.current = isCentered();
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
    };
  }, [stageIndex, phaseIndex]);

  useEffect(() => {
    if (stageIndex !== 2) return;

    const updateBar = () => {
      if (!sectionRef.current || !phasesRef.current) return;
      const containerRect = sectionRef.current.getBoundingClientRect();
      const rect = phasesRef.current.getBoundingClientRect();
      const next = {
        top: rect.top - containerRect.top,
        left: rect.left - containerRect.left,
        width: rect.width,
        height: rect.height,
      };
      if (
        next.top !== barRectRef.current.top ||
        next.left !== barRectRef.current.left ||
        next.width !== barRectRef.current.width ||
        next.height !== barRectRef.current.height
      ) {
        setBarRect(next);
      }
      setBarVertical(rect.height > rect.width);

      const active = phaseRefs.current[phaseIndex];
      if (active && phasesRef.current) {
        const pill = phasesRef.current.querySelector(".phase-active-pill");
        const activeRect = active.getBoundingClientRect();
        const baseRect = phasesRef.current.getBoundingClientRect();
        const left = activeRect.left - baseRect.left;
        const top = activeRect.top - baseRect.top;
        phasesRef.current.style.setProperty("--pill-left", `${left}px`);
        phasesRef.current.style.setProperty("--pill-top", `${top}px`);
        phasesRef.current.style.setProperty(
          "--pill-width",
          `${activeRect.width}px`
        );
        phasesRef.current.style.setProperty(
          "--pill-height",
          `${activeRect.height}px`
        );
        if (pill) {
          pill.classList.remove("flash");
          if (pillTimerRef.current) {
            clearTimeout(pillTimerRef.current);
          }
          if (active.dataset.phase === "motor") {
            pillTimerRef.current = setTimeout(() => {
              pill.classList.add("flash");
            }, 620);
          }
        }
      }
    };

    updateBarRef.current = updateBar;

    const rafUpdate = () => requestAnimationFrame(updateBar);
    rafUpdate();
    window.addEventListener("resize", rafUpdate);
    window.addEventListener("scroll", rafUpdate, { passive: true });

    let resizeObserver = null;
    if (phasesRef.current && "ResizeObserver" in window) {
      resizeObserver = new ResizeObserver(() => {
        rafUpdate();
      });
      resizeObserver.observe(phasesRef.current);
    }
    return () => {
      window.removeEventListener("resize", rafUpdate);
      window.removeEventListener("scroll", rafUpdate);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, [stageIndex, phaseIndex]);

  useEffect(() => {
    if (stageIndex !== 2) return;

    let rafId = 0;
    const start = performance.now();
    const sync = (now) => {
      if (updateBarRef.current) updateBarRef.current();
      if (now - start < 650) {
        rafId = requestAnimationFrame(sync);
      }
    };
    rafId = requestAnimationFrame(sync);

    return () => cancelAnimationFrame(rafId);
  }, [stageIndex]);

  return (
    <section
      className={`section credit-experience credit-stage-${stageIndex} ${
        barVertical ? "bar-vertical" : ""
      }`}
      ref={sectionRef}
      id="suite-credito"
      style={{
        "--progress": `${progress}%`,
        "--progress-scale": progressScale.toFixed(3),
        "--bar-top": `${barRect.top}px`,
        "--bar-left": `${barRect.left}px`,
        "--bar-width": `${barRect.width}px`,
        "--bar-height": `${barRect.height}px`,
      }}
    >
      <div className="credit-bg" aria-hidden="true">
        <div className="combo-rect blue" />
        <div className="combo-rect orange" />
      </div>

      <div className="credit-frames">
        <div className="credit-frame" data-stage="0">
          <CreditSuitePanel />
        </div>
        <div className="credit-frame" data-stage="1">
          <OrchestrationPanel />
        </div>
        <div className="credit-frame" data-stage="2">
          <ProcessPanel
            phaseIndex={phaseIndex}
            setPhaseIndex={setPhaseIndex}
            isActive={stageIndex === 2}
            phasesRef={phasesRef}
            phaseRefs={phaseRefs}
          />
        </div>
      </div>

      <div className="credit-nav">
        <button
          className="credit-nav-btn"
          onClick={() => setStageIndex((prev) => Math.max(prev - 1, 0))}
          disabled={stageIndex === 0}
          type="button"
        >
          ← Anterior
        </button>
        <span className="credit-nav-label">
          {stageIndex === 0
            ? "Suite"
            : stageIndex === 1
              ? "Orquestacion"
              : "Proceso"}
        </span>
        <button
          className="credit-nav-btn"
          onClick={() => setStageIndex((prev) => Math.min(prev + 1, 2))}
          disabled={stageIndex === 2}
          type="button"
        >
          Siguiente →
        </button>
      </div>
    </section>
  );
}

export default CreditExperienceSection;
