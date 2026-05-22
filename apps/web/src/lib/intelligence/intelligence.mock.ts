import type { IntelligenceOverview } from './intelligence.types';

export const intelligenceOverviewMock: IntelligenceOverview = {
  generatedAt: new Date().toISOString(),
  recurringVehicles: ['97021'],
  slowSectors: ['ALMOXARIFADO', 'FINANCEIRO'],
  averageDowntimeHours: 27,
  maintenanceCostTrend: 'UP',
  kpis: [
    { id: 'k1', label: 'Recorrência de avarias', value: 'Alta em 97021', trend: 'UP' },
    { id: 'k2', label: 'Tempo médio parado', value: '27h', trend: 'UP' },
    { id: 'k3', label: 'SLA de atendimento', value: '92%', trend: 'STABLE' },
  ],
};
