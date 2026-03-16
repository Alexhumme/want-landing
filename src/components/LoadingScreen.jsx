import { useEffect, useRef, useState } from "react";
import "./LoadingScreen.css";
import logoTexto from "../assets/logo-texto.png";

const PHASE_DURATION_MS = 300;
const PHASE_DELAY_MS = 500;

const phases = [
  [
    { x: 100.766, y: 14.0188, w: 9.49564, h: 82.4699, r: 0, c: "#FFA52C" },
    { x: 9.58447, y: 82.4698, w: 9.49564, h: 82.4699, r: 180, c: "#002E49" },
    { x: 110.35, y: 0, w: 9.49564, h: 82.4699, r: 90, c: "#FFA52C" },
    { x: 0, y: 96.4886, w: 9.49564, h: 82.4699, r: -90, c: "#002E49" },
    { x: 86.87, y: 28.7952, w: 9.49564, h: 67.6935, r: 0, c: "#FFA52C" },
    { x: 23.48, y: 67.6935, w: 9.49564, h: 67.6935, r: 180, c: "#002E49" },
    { x: 100.766, y: 14.0188, w: 9.49564, h: 72.2424, r: 90, c: "#FFA52C" },
    { x: 9.58447, y: 82.4698, w: 9.49564, h: 72.2424, r: -90, c: "#002E49" }
  ],
  [
    { x: 100.766, y: 14.0188, w: 9.49564, h: 82.4699, r: 0, c: "#FFA52C" },
    { x: 9.58447, y: 82.4698, w: 9.49564, h: 82.4699, r: 180, c: "#002E49" },
    { x: 110.35, y: 0, w: 9.49564, h: 9.58435, r: 90, c: "#FFA52C" },
    { x: 0, y: 96.4886, w: 9.49564, h: 9.58447, r: -90, c: "#002E49" },
    { x: 86.87, y: 28.7952, w: 9.49564, h: 9.5, r: 0, c: "#FFA52C" },
    { x: 23.48, y: 67.6935, w: 9.49564, h: 9.5, r: 180, c: "#002E49" },
    { x: 100.766, y: 14.0188, w: 9.49564, h: 72.2424, r: 90, c: "#FFA52C" },
    { x: 9.58447, y: 82.4698, w: 9.49564, h: 72.2424, r: -90, c: "#002E49" }
  ],
  [
    { x: 20.9493, y: 9.58435, w: 9.49564, h: 82.4699, r: -90, c: "#FFA52C" },
    { x: 89.4004, y: 100.766, w: 9.49564, h: 82.4699, r: 90, c: "#002E49" },
    { x: 6.93054, y: 0, w: 9.49564, h: 81.8267, r: 0, c: "#FFA52C" },
    { x: 103.419, y: 110.35, w: 9.49564, h: 81.8268, r: 180, c: "#002E49" },
    { x: 35.7257, y: 23.48, w: 9.49564, h: 67.6935, r: -90, c: "#FFA52C" },
    { x: 74.624, y: 86.87, w: 9.49564, h: 67.6935, r: 90, c: "#002E49" },
    { x: 20.9493, y: 9.58435, w: 9.49564, h: 72.2424, r: 0, c: "#FFA52C" },
    { x: 89.4004, y: 100.766, w: 9.49564, h: 72.2424, r: 180, c: "#002E49" }
  ],
  [
    { x: 20.8606, y: 9.49561, w: 9.49564, h: 9.49561, r: -90, c: "#FFA52C" },
    { x: 89.3118, y: 100.677, w: 9.49564, h: 9.49561, r: 90, c: "#002E49" },
    { x: 6.8418, y: 53.6552, w: 9.49564, h: 28.0828, r: 0, c: "#FFA52C" },
    { x: 103.331, y: 58.2371, w: 9.49564, h: 29.8027, r: 180, c: "#002E49" },
    { x: 35.637, y: 23.3912, w: 9.49564, h: 67.6935, r: -90, c: "#FFA52C" },
    { x: 74.5354, y: 86.7811, w: 9.49564, h: 67.6935, r: 90, c: "#002E49" },
    { x: 20.8606, y: 9.49561, w: 9.49564, h: 72.2424, r: 0, c: "#FFA52C" },
    { x: 89.3118, y: 100.677, w: 9.49564, h: 72.2424, r: 180, c: "#002E49" }
  ],
  [
    { x: 9.58447, y: 82.4698, w: 9.49564, h: 82.4699, r: 180, c: "#FFA52C" },
    { x: 100.766, y: 14.0188, w: 9.49564, h: 82.4699, r: 0, c: "#002E49" },
    { x: 0, y: 96.4886, w: 9.49564, h: 82.4699, r: -90, c: "#FFA52C" },
    { x: 110.35, y: 0, w: 9.49564, h: 82.4699, r: 90, c: "#002E49" },
    { x: 23.48, y: 67.6935, w: 9.49564, h: 67.6935, r: 180, c: "#FFA52C" },
    { x: 86.8699, y: 28.7952, w: 9.49564, h: 67.6935, r: 0, c: "#002E49" },
    { x: 9.58447, y: 82.4698, w: 9.49564, h: 72.2424, r: -90, c: "#FFA52C" },
    { x: 100.766, y: 14.0188, w: 9.49564, h: 72.2424, r: 90, c: "#002E49" }
  ],
  [
    { x: 9.58447, y: 82.4698, w: 9.49564, h: 82.4699, r: 180, c: "#FFA52C" },
    { x: 100.765, y: 14.0188, w: 9.49564, h: 82.4699, r: 0, c: "#002E49" },
    { x: 0, y: 96.4886, w: 9.49564, h: 9.58435, r: -90, c: "#FFA52C" },
    { x: 110.35, y: 0, w: 9.49564, h: 9.58447, r: 90, c: "#002E49" },
    { x: 23.48, y: 67.6935, w: 9.49564, h: 9.5, r: 180, c: "#FFA52C" },
    { x: 86.8699, y: 28.7952, w: 9.49564, h: 9.5, r: 0, c: "#002E49" },
    { x: 9.58447, y: 82.4698, w: 9.49564, h: 72.2424, r: -90, c: "#FFA52C" },
    { x: 100.765, y: 14.0188, w: 9.49564, h: 72.2424, r: 90, c: "#002E49" }
  ],
  [
    { x: 89.4004, y: 100.766, w: 9.49564, h: 82.4699, r: 90, c: "#FFA52C" },
    { x: 20.9495, y: 9.58447, w: 9.49564, h: 82.4699, r: -90, c: "#002E49" },
    { x: 103.419, y: 110.35, w: 9.49564, h: 81.8267, r: 180, c: "#FFA52C" },
    { x: 6.93066, y: 0, w: 9.49564, h: 81.8268, r: 0, c: "#002E49" },
    { x: 74.624, y: 86.87, w: 9.49564, h: 67.6935, r: 90, c: "#FFA52C" },
    { x: 35.7258, y: 23.4801, w: 9.49564, h: 67.6935, r: -90, c: "#002E49" },
    { x: 89.4004, y: 100.766, w: 9.49564, h: 72.2424, r: 180, c: "#FFA52C" },
    { x: 20.9495, y: 9.58447, w: 9.49564, h: 72.2424, r: 0, c: "#002E49" }
  ],
  [
    { x: 89.3118, y: 100.677, w: 9.49564, h: 9.49561, r: 90, c: "#FFA52C" },
    { x: 20.8606, y: 9.49561, w: 9.49564, h: 9.49561, r: -90, c: "#002E49" },
    { x: 103.331, y: 56.5172, w: 9.49564, h: 28.0828, r: 180, c: "#FFA52C" },
    { x: 6.8418, y: 51.9351, w: 9.49564, h: 29.8027, r: 0, c: "#002E49" },
    { x: 74.5354, y: 86.7812, w: 9.49564, h: 67.6935, r: 90, c: "#FFA52C" },
    { x: 35.637, y: 23.3911, w: 9.49564, h: 67.6935, r: -90, c: "#002E49" },
    { x: 89.3118, y: 100.677, w: 9.49564, h: 72.2424, r: 180, c: "#FFA52C" },
    { x: 20.8606, y: 9.49561, w: 9.49564, h: 72.2424, r: 0, c: "#002E49" }
  ]
];

function LoadingScreen({ progress, stage }) {
  const [phaseIndex, setPhaseIndex] = useState(0);
  const timerRef = useRef();

  useEffect(() => {
    document.body.classList.toggle("is-loading", stage !== "hidden");
    return () => document.body.classList.remove("is-loading");
  }, [stage]);

  useEffect(() => {
    if (stage !== "loading") return;

    let mounted = true;

    const tick = () => {
      if (!mounted) return;
      setPhaseIndex((prev) => (prev + 1) % phases.length);
      timerRef.current = setTimeout(tick, PHASE_DELAY_MS + PHASE_DURATION_MS);
    };

    timerRef.current = setTimeout(tick, PHASE_DELAY_MS);

    return () => {
      mounted = false;
      clearTimeout(timerRef.current);
    };
  }, [stage]);

  if (stage === "hidden") return null;

  return (
    <div className={`loading-screen loading-screen--${stage}`}>
      <div className="loading-shell">
        <div className={`loading-logo ${stage !== "loading" ? "is-reveal" : ""}`}>
          <div className="loading-isotype" aria-hidden="true">
            {phases[phaseIndex].map((rect, index) => (
              <span
                key={index}
                className="loading-rect"
                style={{
                  left: rect.x,
                  top: rect.y,
                  width: rect.w,
                  height: rect.h,
                  transform: `rotate(${rect.r}deg)`,
                  backgroundColor: rect.c
                }}
              />
            ))}
          </div>
          <img className="loading-text" src={logoTexto} alt="WANT" />
        </div>

        <div className="loading-bar glass-panel" aria-hidden="true">
          <span className="loading-bar-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
