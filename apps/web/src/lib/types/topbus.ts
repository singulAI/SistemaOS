import type { DynamicField, DynamicFieldType, FleetStatus as SharedFleetStatus, UserRole as SharedUserRole } from '../../../../../packages/shared/src/domain';

export type UserRole = SharedUserRole;
export type FleetStatus = SharedFleetStatus;

export interface User {
  id: string;
  name: string;
  role: UserRole;
  sectorId: string;
}

export interface Sector {
  id: string;
  name: string;
  code: string;
}

export interface Vehicle {
  id: string;
  prefix: string;
  status: FleetStatus;
}

export interface Driver {
  id: string;
  name: string;
  chapa: string;
}

export interface Provider {
  id: string;
  name: string;
  serviceType: string;
}

export interface Route {
  id: string;
  line: string;
  name: string;
}

export interface Schedule {
  id: string;
  driverChapa: string;
  dateTimeISO: string;
  routeId: string;
  vehicleId: string;
}

export interface ServiceRecord {
  id: string;
  vehicle: string;
  provider: string;
  executor: string;
  serviceType: string;
  description: string;
  value: number;
  status: 'PENDENTE' | 'EM_EXECUCAO' | 'FINALIZADO';
}

export interface DamageRecord {
  id: string;
  vehicle: string;
  driver: string;
  damageType: string;
  description: string;
  estimatedCost: number;
}

export type ModuleField = DynamicField & { type: DynamicFieldType };

export interface ModuleDefinition {
  id: string;
  name: string;
  sector: string;
  fields: ModuleField[];
}

export interface Insight {
  id: string;
  text: string;
  severity: 'info' | 'warning' | 'critical';
}

export interface DashboardMetric {
  id: string;
  label: string;
  value: number;
}

export interface UploadedDocument {
  id: string;
  fileName: string;
  mimeType: string;
  uploadedAt: string;
}

export interface OperationalScaleSuggestion {
  vehicle: string;
  line: string;
  route: string;
  confidence: number;
}
