import { mockNotifications } from './workflow.notifications';
import { defaultWorkflowTimeline } from './workflow.timeline';
import type { WorkflowOccurrence, WorkflowTransition } from './workflow.types';

export const workflowTransitions: WorkflowTransition[] = [
  { fromStatus: 'REGISTERED', toStatus: 'UNDER_ANALYSIS', fromSector: 'PORTARIA', toSector: 'MANUTENCAO', event: 'DAMAGE_ASSIGNED', performedAt: '08:12' },
  { fromStatus: 'UNDER_ANALYSIS', toStatus: 'WAITING_PART', fromSector: 'MANUTENCAO', toSector: 'ALMOXARIFADO', event: 'PART_REQUESTED', performedAt: '08:40' },
  { fromStatus: 'UNDER_ANALYSIS', toStatus: 'WAITING_THIRD_PARTY', fromSector: 'MANUTENCAO', toSector: 'TERCEIRIZADO', event: 'THIRD_PARTY_CALLED', performedAt: '09:10' },
  { fromStatus: 'WAITING_PART', toStatus: 'WAITING_APPROVAL', fromSector: 'ALMOXARIFADO', toSector: 'FINANCEIRO', event: 'SERVICE_STARTED', performedAt: '10:00' },
  { fromStatus: 'WAITING_APPROVAL', toStatus: 'IN_PROGRESS', fromSector: 'FINANCEIRO', toSector: 'GESTAO', event: 'SERVICE_STARTED', performedAt: '10:20' },
  { fromStatus: 'IN_PROGRESS', toStatus: 'COMPLETED', fromSector: 'GESTAO', toSector: 'GESTAO', event: 'SERVICE_COMPLETED', performedAt: '11:30' },
];

export function applyNextTransition(occurrence: WorkflowOccurrence): WorkflowOccurrence {
  const next = workflowTransitions.find((transition) => transition.fromStatus === occurrence.status);
  if (!next) return occurrence;
  return { ...occurrence, status: next.toStatus, sector: next.toSector };
}

export function getWorkflowSimulation() {
  return {
    transitions: workflowTransitions,
    timeline: defaultWorkflowTimeline,
    notifications: mockNotifications,
  };
}
