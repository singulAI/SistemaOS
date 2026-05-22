import type { WorkflowTimelineEntry } from './workflow.types';

export const defaultWorkflowTimeline: WorkflowTimelineEntry[] = [
  { at: '08:10', label: 'Avaria registrada', sector: 'PORTARIA', status: 'REGISTERED' },
  { at: '08:12', label: 'Encaminhada para manutenção', sector: 'MANUTENCAO', status: 'UNDER_ANALYSIS' },
  { at: '08:40', label: 'Peça solicitada', sector: 'ALMOXARIFADO', status: 'WAITING_PART' },
  { at: '09:10', label: 'Terceirizado acionado', sector: 'TERCEIRIZADO', status: 'WAITING_THIRD_PARTY' },
];
