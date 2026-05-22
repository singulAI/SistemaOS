import express from "express";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 3412;
const APP_ENV = process.env.APP_ENV || "homologation";

app.use(cors({
  origin: [
    "http://sistema.appbus.online",
    "https://sistema.appbus.online",
    "http://appbus.online",
    "https://appbus.online"
  ],
  credentials: true
}));

app.use(express.json({ limit: "10mb" }));

app.get("/health", (_req, res) => {
  res.json({
    service: "AppBus OS - Núcleo Operacional",
    status: "online",
    env: APP_ENV,
    version: "0.1.0"
  });
});

app.get("/status", (_req, res) => {
  res.json({
    system: "AppBus OS",
    module: "Núcleo Operacional",
    status: "homologation-ready",
    publicName: "Núcleo Operacional",
    technicalPurpose: "workflow, eventos, tarefas, auditoria e integrações futuras"
  });
});

app.get("/contracts", (_req, res) => {
  res.json({
    message: "Contratos de integração em preparação.",
    available: [
      "workflow",
      "events",
      "tasks",
      "notifications",
      "intelligence"
    ]
  });
});

app.get("/workflow/demo", (_req, res) => {
  res.json({
    occurrenceId: "DEMO-AVARIA-001",
    currentStatus: "UNDER_ANALYSIS",
    currentSector: "MANUTENCAO",
    nextSector: "ALMOXARIFADO",
    timeline: [
      {
        time: "08:10",
        event: "Avaria registrada pela portaria"
      },
      {
        time: "08:12",
        event: "Ocorrência encaminhada para manutenção"
      },
      {
        time: "08:40",
        event: "Peça solicitada ao almoxarifado"
      }
    ]
  });
});

app.get("/intelligence/demo", (_req, res) => {
  res.json({
    title: "Centro de Inteligência Operacional",
    indicators: {
      stoppedVehicles: 3,
      pendingApprovals: 2,
      overdueTasks: 1,
      recurringFailures: 4
    },
    swot: {
      strengths: ["Fluxo operacional rastreável"],
      weaknesses: ["Dados ainda em ambiente de demonstração"],
      opportunities: ["Prevenção de falhas recorrentes"],
      threats: ["Veículos parados por tempo elevado"]
    }
  });
});

app.use((_req, res) => {
  res.status(404).json({
    error: "Recurso não encontrado",
    service: "AppBus OS - Núcleo Operacional"
  });
});

app.listen(PORT, "127.0.0.1", () => {
  console.log(`AppBus Engine running on http://127.0.0.1:${PORT}`);
});
