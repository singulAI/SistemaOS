export type WorkflowStatus =
  | 'REGISTERED'
  | 'UNDER_ANALYSIS'
  | 'WAITING_PART'
  | 'WAITING_THIRD_PARTY'
  | 'WAITING_APPROVAL'
  | 'IN_PROGRESS'
  | 'VALIDATION'
  | 'COMPLETED'
  | 'ARCHIVED';

export type WorkflowSector =
  | 'PORTARIA'
  | 'MANUTENCAO'
  | 'FROTA'
  | 'ALMOXARIFADO'
  | 'TERCEIRIZADO'
  | 'FINANCEIRO'
  | 'OPERACAO'
  | 'RH'
  | 'GESTAO'
  | 'AUDITORIA';

export type WorkflowPriority = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
export type WorkflowSeverity = 'INFO' | 'WARNING' | 'SEVERE' | 'BLOCKER';

export type WorkflowEvent =
  | 'DAMAGE_REGISTERED'
  | 'DAMAGE_ASSIGNED'
  | 'PART_REQUESTED'
  | 'THIRD_PARTY_CALLED'
  | 'SERVICE_STARTED'
  | 'SERVICE_COMPLETED'
  | 'VEHICLE_STOPPED'
  | 'VEHICLE_RELEASED';

export interface WorkflowOccurrence {
  id: string;
  vehicle: string;
  title: string;
  description: string;
  status: WorkflowStatus;
  sector: WorkflowSector;
  priority: WorkflowPriority;
  severity: WorkflowSeverity;
  createdAt: string;
}

export interface WorkflowTransition {
  fromStatus: WorkflowStatus;
  toStatus: WorkflowStatus;
  fromSector: WorkflowSector;
  toSector: WorkflowSector;
  event: WorkflowEvent;
  performedAt: string;
  notes?: string;
}

export interface WorkflowTimelineEntry {
  at: string;
  label: string;
  sector: WorkflowSector;
  status: WorkflowStatus;
}
