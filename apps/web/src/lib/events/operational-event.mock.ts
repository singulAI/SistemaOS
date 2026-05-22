import type { OperationalEvent } from './operational-event.types';

export const operationalEventsMock: OperationalEvent[] = [
  { id: 'ev-1', type: 'DAMAGE_REGISTERED', occurrenceId: 'occ-97021-1', vehicle: '97021', timestamp: '2026-05-22T08:10:00Z', payload: { source: 'PORTARIA' } },
  { id: 'ev-2', type: 'DAMAGE_ASSIGNED', occurrenceId: 'occ-97021-1', vehicle: '97021', timestamp: '2026-05-22T08:12:00Z', payload: { targetSector: 'MANUTENCAO' } },
  { id: 'ev-3', type: 'PART_REQUESTED', occurrenceId: 'occ-97021-1', vehicle: '97021', timestamp: '2026-05-22T08:40:00Z', payload: { part: 'VIDRO LETREIRO' } },
  { id: 'ev-4', type: 'THIRD_PARTY_CALLED', occurrenceId: 'occ-97021-1', vehicle: '97021', timestamp: '2026-05-22T09:10:00Z', payload: { provider: 'Oficina Parceira A' } },
  { id: 'ev-5', type: 'VEHICLE_STOPPED', occurrenceId: 'occ-97021-1', vehicle: '97021', timestamp: '2026-05-22T09:15:00Z', payload: { reason: 'Aguardando reparo' } },
];
