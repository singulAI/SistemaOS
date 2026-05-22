export type OperationalEventType =
  | 'DAMAGE_REGISTERED'
  | 'DAMAGE_ASSIGNED'
  | 'PART_REQUESTED'
  | 'THIRD_PARTY_CALLED'
  | 'SERVICE_STARTED'
  | 'SERVICE_COMPLETED'
  | 'VEHICLE_STOPPED'
  | 'VEHICLE_RELEASED';

export interface OperationalEvent {
  id: string;
  type: OperationalEventType;
  occurrenceId: string;
  vehicle: string;
  timestamp: string;
  payload: Record<string, unknown>;
}
