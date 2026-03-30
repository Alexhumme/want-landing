import { useEffect, useMemo, useState } from "react";
import "./process-panel.css";
import isotipo from "../../../../assets/isotipo.png";
import iconSolicitud from "../../../../assets/icon-phase-solicitud.svg";
import iconValidacion from "../../../../assets/icon-phase-validacion.svg";
import iconKyc from "../../../../assets/icon-phase-kyc.svg";
import iconAprobacion from "../../../../assets/icon-phase-aprobacion.svg";
import iconDesembolso from "../../../../assets/icon-phase-desembolso.svg";
import iconCredit from "../../../../assets/icon-credit-card.svg";
import iconPulse from "../../../../assets/icon-pulse.svg";
import iconLink from "../../../../assets/icon-link.svg";
import iconShield from "../../../../assets/icon-shield.svg";
import iconCheck from "../../../../assets/icon-check.svg";
import iconBolt from "../../../../assets/icon-bolt.svg";

const phases = [
  {
    id: "solicitud",
    label: "Solicitud",
    icon: iconSolicitud,
    theme: {
      bg: "#E6F1FB",
      border: "#378ADD",
      text: "#0C447C",
      line: "#B5D4F4",
    },
    steps: [
      {
        title: "El cliente inicia la solicitud",
        tag: "Canal",
        detail:
          "El cliente accede al canal de su preferencia: WhatsApp, ChatBot Web Responsive, o interfaz web asistida por asesor. El sistema identifica el canal y el tipo de producto solicitado.",
        services: ["WhatsApp", "Web Responsive", "Interfaz asesor"],
      },
      {
        title: "Captura de datos básicos",
        tag: "ChatBot",
        detail:
          "El chatbot solicita numero de cedula y correo electronico. Se confirma identidad preliminar con codigo OTP enviado al correo del cliente. Para credito empresarial, el asesor captura datos adicionales de la empresa.",
        services: ["Cedula", "Correo", "OTP"],
      },
      {
        title: "Seleccion del producto",
        tag: "Config.",
        detail:
          "El cliente indica el tipo de credito: libre inversion, vivienda, vehiculo, rotativo, microcredito o empresarial. El sistema enruta la solicitud al modulo de producto correspondiente y al motor de reglas asociado.",
        services: ["Consumo/Vivienda", "Microcredito", "Empresarial"],
      },
    ],
  },
  {
    id: "validacion",
    label: "Validacion",
    icon: iconValidacion,
    theme: {
      bg: "#EEEDFE",
      border: "#7F77DD",
      text: "#3C3489",
      line: "#CECBF6",
    },
    steps: [
      {
        title: "Validacion basica (Llamado 1)",
        tag: "Backend",
        detail:
          "El backend consulta la base de datos interna del Core Bancario para verificar capacidad disponible, habito de pago interno y condiciones de elegibilidad preliminares del cliente.",
        services: ["Core Bancario", "BD interna", "Capacidad"],
      },
      {
        title: "Autorizacion del titular",
        tag: "Legal",
        detail:
          "El cliente acepta la autorizacion de consulta y manejo de datos personales. Confirma con OTP de aceptacion, habilitando al sistema para consultar centrales de riesgo externas.",
        services: ["Autorizacion HABEAS DATA", "OTP aceptacion"],
      },
      {
        title: "Consulta a centrales externas (Llamado 2)",
        tag: "Externo",
        detail:
          "La capa de orquestacion consulta simultaneamente a Experian y Transunion para obtener score, historial de mora, endeudamiento total y demas variables del bureau. ACH Colombia valida la cuenta bancaria si es necesario.",
        services: ["Experian", "Transunion", "ACH Colombia"],
      },
    ],
  },
  {
    id: "motor",
    label: "Motor",
    icon: isotipo,
    theme: {
      bg: "#FAEEDA",
      border: "#BA7517",
      text: "#633806",
      line: "#FAC775",
      isMotor: true,
    },
    steps: [
      {
        title: "Parsing y segmentacion",
        tag: "Motor",
        detail:
          "El motor normaliza todos los campos de entrada, cataloga las variables y clasifica al cliente en el macro-segmento correspondiente segun apetito de riesgo, rentabilidad y volumen objetivo de la entidad.",
        services: ["Parsing", "Macro-segmento", "Micro-segmento"],
      },
      {
        title: "Aplicacion de politicas de riesgo",
        tag: "Reglas",
        detail:
          "Se aplican reglas de habito de pago interno y externo, scoring estadistico (Logit, Chaid, Random Forest o ML) y calculo de capacidad de pago real ajustada por segmento.",
        services: ["Internal rules", "External rules", "Scoring", "Capacity"],
      },
      {
        title: "Generacion de oferta (Llamado 3)",
        tag: "Decision",
        detail:
          "El motor combina todos los resultados y calcula monto, tasa, plazo, linea de credito, garantias y tipo de salida. La oferta es presentada al cliente y genera un resultado.",
        services: [
          "Monto",
          "Tasa",
          "Plazo",
          "Linea",
          "Garantias",
          "Tipo salida",
        ],
      },
      {
        title: "Resultado (Salida del Motor)",
        tag: "Resultado",
        detail:
          "La combinacion de componentes configura la decision del proceso en torno a condiciones clave y su resultado.",
        services: [
          "Monto",
          "Tasa",
          "Plazo",
          "Linea",
          "Garantias",
          "Tipo salida",
          "Aprobada",
          "Preaprobada",
          "Aplazada",
          "Negada",
        ],
      },
    ],
  },
  {
    id: "kyc",
    label: "KYC + Firma",
    icon: iconKyc,
    theme: {
      bg: "#E1F5EE",
      border: "#1D9E75",
      text: "#085041",
      line: "#9FE1CB",
    },
    steps: [
      {
        title: "Verificacion de identidad (KYC)",
        tag: "KYC",
        detail:
          "El cliente accede al enlace de KYC enviado por el sistema. Se realiza validacion biometrica y verificacion de identidad con documento fisico. Mareigua u otro proveedor aliado ejecuta el proceso y retorna el resultado.",
        services: ["Mareigua", "Biometria", "Documento ID"],
      },
      {
        title: "Carga de documentos",
        tag: "Docs",
        detail:
          "El cliente carga los documentos requeridos segun el tipo de credito: cedula, RUT, camara de comercio, estados financieros, entre otros. El sistema los almacena y hace transito seguro dentro del flujo.",
        services: ["Cedula", "RUT", "Camara comercio", "Est. financieros"],
      },
      {
        title: "Firma electronica del pagare",
        tag: "Firma",
        detail:
          "El sistema genera automaticamente el pagare, la solicitud de credito y el formato de asegurabilidad. El cliente los firma electronicamente. El proveedor de firma es aliado de Want o puede ser uno propio de la entidad.",
        services: ["Pagare digital", "Asegurabilidad", "Firma electronica"],
      },
    ],
  },
  {
    id: "aprobacion",
    label: "Aprobacion",
    icon: iconAprobacion,
    theme: {
      bg: "#FAECE7",
      border: "#D85A30",
      text: "#712B13",
      line: "#F5C4B3",
    },
    steps: [
      {
        title: "Revision del analista",
        tag: "Analista",
        detail:
          "Para creditos que no aplican aprobacion en linea automatica, el analista de credito revisa la informacion diligenciada, los resultados del motor y los documentos cargados. Puede modificar variables antes de escalar.",
        services: ["Bandeja de solicitudes", "Revision documentos"],
      },
      {
        title: "Flujo de aprobacion jerarquico",
        tag: "Comite",
        detail:
          "La solicitud escala a los entes de aprobacion definidos en la politica: aprobador de primer nivel, gerente de zona, comite de credito, etc. La estructura puede ser horizontal o jerarquica segun el tipo y monto de la operacion.",
        services: ["Niveles aprobacion", "Horizontal o jerarquico"],
      },
      {
        title: "Decision final y notificacion",
        tag: "Resultado",
        detail:
          "Una vez el ultimo ente ejecuta la decision, el sistema notifica al cliente por correo o WhatsApp. Las decisiones posibles son: aprobada, preaprobada (con condiciones), aplazada o negada con causal.",
        services: ["Aprobada", "Preaprobada", "Aplazada", "Negada"],
      },
    ],
  },
  {
    id: "desembolso",
    label: "Desembolso",
    icon: iconDesembolso,
    theme: {
      bg: "#EAF3DE",
      border: "#639922",
      text: "#27500A",
      line: "#C0DD97",
    },
    steps: [
      {
        title: "Envio al Core Bancario",
        tag: "Core",
        detail:
          "El Originador envia la instruccion de desembolso directamente al Core Bancario de la entidad. Se incluyen todos los parametros de la operacion aprobada: monto, tasa, plazo, linea y condiciones de garantia.",
        services: ["Core Bancario", "Instruccion desembolso"],
      },
      {
        title: "Constitucion de garantias",
        tag: "Garantias",
        detail:
          "El Core procede a constituir las garantias requeridas segun el tipo de credito (fondos de garantia, hipoteca, pignoracion, etc.) antes de efectuar el desembolso final al cliente.",
        services: ["Fondo de garantia", "Hipoteca", "Pignoracion"],
      },
      {
        title: "Desembolso y registro en Datalake",
        tag: "Finalizado",
        detail:
          "El dinero es desembolsado en la cuenta del cliente. Toda la data del proceso queda registrada en el Datalake de la entidad para consumo de los sistemas BI/BA, auditoria y analisis de riesgo posterior.",
        services: ["Desembolso cuenta", "Datalake", "BI/BA", "Auditoria"],
      },
    ],
  },
];

const outcomes = [
  {
    label: "Aprobada",
    desc: "Desembolso directo",
    bg: "#EAF3DE",
    border: "#97C459",
    color: "#27500A",
    icon: "✓",
  },
  {
    label: "Preaprobada",
    desc: "Con condiciones",
    bg: "#E6F1FB",
    border: "#85B7EB",
    color: "#0C447C",
    icon: "◎",
  },
  {
    label: "Aplazada",
    desc: "Pendiente info",
    bg: "#FAEEDA",
    border: "#EF9F27",
    color: "#633806",
    icon: "⏸",
  },
  {
    label: "Negada",
    desc: "Con causal",
    bg: "#FCEBEB",
    border: "#F09595",
    color: "#791F1F",
    icon: "✕",
  },
];

function ProcessPanel({
  phaseIndex,
  setPhaseIndex,
  isActive,
  phasesRef,
  phaseRefs,
}) {
  const [openStep, setOpenStep] = useState(0);
  const progress = useMemo(
    () => (phaseIndex / (phases.length - 1)) * 100,
    [phaseIndex]
  );

  useEffect(() => {
    setOpenStep(0);
  }, [phaseIndex]);

  const phase = phases[phaseIndex];

  return (
    <div className={`credit-panel process-panel ${isActive ? "active" : ""}`}>
      <div className="process-shell">
        <div className="process-header" data-aos="fade-up">
          <span className="process-badge">Capa de orquestacion</span>
          <h2>Suite WANT</h2>
          <p>
            De la solicitud al desembolso. Avanza por fases y despliega cada paso
            para ver el detalle.
          </p>
          <p className="process-note">
            Sirve tambien para empresas que quieren prestar servicios financieros
            a personas naturales y juridicas.
          </p>
        </div>

        <div className="process-body">
          <div
            className="process-phases"
            style={{ "--progress": `${progress}%` }}
            ref={phasesRef}
          >
            <span className="phase-active-pill" aria-hidden="true" />
            {phases.map((p, index) => (
              <button
                key={p.id}
                className={`phase ${index === phaseIndex ? "active" : ""} ${
                  p.theme.isMotor ? "motor" : ""
                }`}
                onClick={() => setPhaseIndex(index)}
                data-phase={p.id}
                ref={(el) => {
                  if (!phaseRefs?.current) return;
                  phaseRefs.current[index] = el;
                }}
                type="button"
              >
                <span className="phase-num">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="phase-label">
                  <img src={p.icon} alt="" />
                  {p.label}
                </span>
              </button>
            ))}
          </div>

          <div className="process-stage" key={phase.id}>
            <div className="timeline">
              {phase.steps.map((step, index) => (
                <div
                  className={`step ${openStep === index ? "open" : ""}`}
                  key={step.title}
                  onClick={() => setOpenStep(index === openStep ? -1 : index)}
                >
                  <div className="step-left">
                    <div
                      className="step-circle"
                      style={{
                        background: phase.theme.bg,
                        borderColor: phase.theme.border,
                        color: phase.theme.text,
                      }}
                    >
                      {index + 1}
                    </div>
                    <div
                      className="step-line"
                      style={{ background: phase.theme.line }}
                    />
                  </div>
                  <div className="step-body">
                    <div className="step-header">
                      <span className="step-title">{step.title}</span>
                      <div className="step-meta">
                        <span
                          className="step-tag"
                          style={{
                            background: phase.theme.bg,
                            color: phase.theme.text,
                            borderColor: phase.theme.line,
                          }}
                        >
                          {step.tag}
                        </span>
                        <span className="expand-icon">▾</span>
                      </div>
                    </div>
                    <div
                      className={`step-detail ${openStep === index ? "on" : ""}`}
                    >
                      <p>{step.detail}</p>
                      {phase.id === "motor" && step.tag === "Resultado" && (
                        <div className="decision-block">
                          <div className="decision-label">Decision (Salida del Motor)</div>
                          <div className="decision-items">
                            <span className="decision-item">
                              <img src={iconCredit} alt="" />
                              Monto
                            </span>
                            <span className="decision-item">
                              <img src={iconPulse} alt="" />
                              Tasa
                            </span>
                            <span className="decision-item">
                              <img src={iconBolt} alt="" />
                              Plazo
                            </span>
                            <span className="decision-item">
                              <img src={iconLink} alt="" />
                              Linea
                            </span>
                            <span className="decision-item">
                              <img src={iconShield} alt="" />
                              Garantias
                            </span>
                            <span className="decision-item">
                              <img src={iconCheck} alt="" />
                              Tipo salida
                            </span>
                          </div>
                          <div className="decision-status">
                            <span className="ok">Aprobada</span>
                            <span className="info">Preaprobada</span>
                            <span className="warn">Aplazada</span>
                            <span className="danger">Negada</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {phase.id === "desembolso" && (
              <div className="outcomes">
                {outcomes.map((outcome) => (
                  <div
                    className="outcome"
                    key={outcome.label}
                    style={{
                      background: outcome.bg,
                      borderColor: outcome.border,
                      color: outcome.color,
                    }}
                  >
                    <div className="oc-ico">{outcome.icon}</div>
                    <div className="oc-label">{outcome.label}</div>
                    <div className="oc-desc">{outcome.desc}</div>
                  </div>
                ))}
              </div>
            )}

            <div className="legend">
              <div className="leg">
                <div
                  className="leg-dot"
                  style={{ background: phase.theme.border }}
                />
                {phase.id === "motor"
                  ? "Motor de decision"
                  : "Acciones del sistema"}
              </div>
              <div className="leg">
                <div className="leg-dot" style={{ background: phase.theme.line }} />
                {phase.id === "motor" ? "Reglas de politica" : "Servicios externos"}
              </div>
            </div>
          </div>
        </div>

        <div className="nav-footer">
          <button
            className="nf-btn"
            onClick={() => setPhaseIndex((p) => Math.max(p - 1, 0))}
            disabled={phaseIndex === 0}
            type="button"
          >
            ← Anterior
          </button>
          <span className="nf-phase">
            Fase {phaseIndex + 1} de {phases.length} — {phase.label}
          </span>
          <button
            className="nf-btn"
            onClick={() => setPhaseIndex((p) => Math.min(p + 1, phases.length - 1))}
            disabled={phaseIndex === phases.length - 1}
            type="button"
          >
            Siguiente →
          </button>
        </div>
      </div>
    </div>
  );
}

export { phases };
export default ProcessPanel;
