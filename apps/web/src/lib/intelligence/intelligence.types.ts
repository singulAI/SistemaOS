export interface IntelligenceKpi {
  id: string;
  label: string;
  value: string;
  trend: 'UP' | 'DOWN' | 'STABLE';
}

export interface IntelligenceOverview {
  generatedAt: string;
  recurringVehicles: string[];
  slowSectors: string[];
  averageDowntimeHours: number;
  maintenanceCostTrend: 'UP' | 'DOWN' | 'STABLE';
  kpis: IntelligenceKpi[];
}

export interface SWOT {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
}
