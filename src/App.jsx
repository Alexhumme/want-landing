import { useEffect, useMemo, useState } from "react";
import AppRouter from "./router/AppRouter";
import LoadingScreen from "./components/LoadingScreen";
import heroPerson from "./assets/hero-person.png";
import heroImg from "./assets/hero.png";
import isotipo from "./assets/isotipo.png";
import logoTexto from "./assets/logo-texto.png";
import logo from "./assets/logo.png";
import meshGrid from "./assets/mesh-grid.svg";
import phoneFrame from "./assets/phone-frame.svg";
import iconServers from "./assets/icon-servers.svg";
import iconGlobe from "./assets/icon-globe.svg";
import iconShield from "./assets/icon-shield.svg";
import iconPulse from "./assets/icon-pulse.svg";
import iconCheck from "./assets/icon-check.svg";

function App() {
  const assets = useMemo(
    () => [
      heroPerson,
      heroImg,
      isotipo,
      logoTexto,
      logo,
      meshGrid,
      phoneFrame,
      iconServers,
      iconGlobe,
      iconShield,
      iconPulse,
      iconCheck,
    ],
    []
  );

  const [stage, setStage] = useState("loading");
  const [progress, setProgress] = useState(8);

  useEffect(() => {
    let isMounted = true;
    let progressTimer;

    const preloadAssets = (sources) =>
      Promise.all(
        sources.map(
          (src) =>
            new Promise((resolve) => {
              const img = new Image();
              img.src = src;
              img.onload = resolve;
              img.onerror = resolve;
            })
        )
      );

    const minDelay = new Promise((resolve) => setTimeout(resolve, 00));
    const fontReady = document.fonts?.ready || Promise.resolve();

    progressTimer = setInterval(() => {
      setProgress((prev) => (prev < 90 ? prev + Math.random() * 2.2 : prev));
    }, 120);

    Promise.all([preloadAssets(assets), fontReady, minDelay]).then(() => {
      if (!isMounted) return;
      clearInterval(progressTimer);
      setProgress(100);

      setTimeout(() => {
        if (!isMounted) return;
        setStage("reveal");
      }, 300);

      setTimeout(() => {
        if (!isMounted) return;
        setStage("exit");
      }, 1000);

      setTimeout(() => {
        if (!isMounted) return;
        setStage("hidden");
      }, 1400);
    });

    return () => {
      isMounted = false;
      clearInterval(progressTimer);
    };
  }, [assets]);

  return (
    <>
      <LoadingScreen progress={Math.min(progress, 100)} stage={stage} />
      <AppRouter />
    </>
  );
}

export default App;
