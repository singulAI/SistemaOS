import { getWorkflowSimulation } from './workflow.transitions';
import type { WorkflowOccurrence } from './workflow.types';

export const mockWorkflowOccurrences: WorkflowOccurrence[] = [
  {
    id: 'occ-97021-1',
    vehicle: '97021',
    title: 'VIDRO DO LETREIRO QUEBRADO',
    description: 'Registro de avaria identificado na entrada da garagem.',
    status: 'UNDER_ANALYSIS',
    sector: 'MANUTENCAO',
    priority: 'HIGH',
    severity: 'WARNING',
    createdAt: new Date().toISOString(),
  },
];

export const mockWorkflowEngineState = getWorkflowSimulation();
