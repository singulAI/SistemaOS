import { aiInsights, mockDamage, mockDriver, mockLine, mockService, mockVehicles } from '../../data/mock';
import { suggestOperationalScale as localSuggest } from '../scaleSuggestion';
import type {
  DamageRecord,
  DashboardMetric,
  Driver,
  FleetStatus,
  Insight,
  ModuleDefinition,
  OperationalScaleSuggestion,
  Provider,
  Route,
  Schedule,
  Sector,
  ServiceRecord,
  UploadedDocument,
  Vehicle,
} from '../types/topbus';

const sectors: Sector[] = [
  { id: 'master', name: 'Master', code: 'MASTER' },
  { id: 'maintenance', name: 'Gestor Manutenção', code: 'GESTOR_MANUTENCAO' },
  { id: 'operations', name: 'Operação', code: 'OPERACAO' },
  { id: 'fleet', name: 'Frota', code: 'FROTA' },
];

const vehicles: Vehicle[] = mockVehicles.map((prefix, index) => ({
  id: `veh-${index + 1}`,
  prefix,
  status: (['ATIVO', 'EM_MANUTENCAO', 'AGUARDANDO_PECA'] as FleetStatus[])[index] ?? 'ATIVO',
}));

const drivers: Driver[] = [{ id: 'drv-1', name: mockDriver.name, chapa: mockDriver.chapa }];
const providers: Provider[] = [{ id: 'prv-1', name: 'Oficina Parceira A', serviceType: 'Transmissão' }];
const routes: Route[] = [{ id: 'rot-1', line: mockLine, name: 'Bairro > Centro' }];
const schedules: Schedule[] = [{ id: 'sch-1', driverChapa: mockDriver.chapa, dateTimeISO: new Date().toISOString(), routeId: 'rot-1', vehicleId: 'veh-1' }];
const serviceRecords: ServiceRecord[] = [{ id: 'srv-1', vehicle: '97021', provider: 'Oficina Parceira A', executor: 'Equipe A', serviceType: mockService, description: 'Substituição completa', value: 3200, status: 'EM_EXECUCAO' }];
const damageRecords: DamageRecord[] = [{ id: 'dmg-1', vehicle: '97021', driver: mockDriver.name, damageType: mockDamage.title, description: 'Avaria identificada na portaria', estimatedCost: 315 }];
const modules: ModuleDefinition[] = [];

export const getDashboardMetrics = async (): Promise<DashboardMetric[]> => [
  { id: 'm1', label: 'Veículos ativos', value: vehicles.filter(v => v.status === 'ATIVO').length },
  { id: 'm2', label: 'Em manutenção', value: vehicles.filter(v => v.status === 'EM_MANUTENCAO').length },
  { id: 'm3', label: 'Aguardando peça', value: vehicles.filter(v => v.status === 'AGUARDANDO_PECA').length },
];
export const getVehicles = async (): Promise<Vehicle[]> => vehicles;
export const getDrivers = async (): Promise<Driver[]> => drivers;
export const getProviders = async (): Promise<Provider[]> => providers;
export const getRoutes = async (): Promise<Route[]> => routes;
export const getSchedules = async (): Promise<Schedule[]> => schedules;
export const getServiceRecords = async (): Promise<ServiceRecord[]> => serviceRecords;
export const getDamageRecords = async (): Promise<DamageRecord[]> => damageRecords;
export const getFleetStatus = async (): Promise<Vehicle[]> => vehicles;
export const getSectors = async (): Promise<Sector[]> => sectors;
export const getInsights = async (): Promise<Insight[]> => aiInsights.map((text, i) => ({ id: `ins-${i + 1}`, text, severity: i === 0 ? 'warning' : 'info' }));

export const suggestOperationalScale = async (input: { chapa: string; dateTimeISO: string }): Promise<OperationalScaleSuggestion> =>
  localSuggest(input);

export const createRecord = async <T extends object>(payload: T): Promise<{ id: string; payload: T }> => ({ id: `rec-${Date.now()}`, payload });
export const updateRecord = async <T extends object>(id: string, payload: T): Promise<{ id: string; payload: T }> => ({ id, payload });
export const uploadFile = async (payload: { fileName: string; mimeType: string }): Promise<UploadedDocument> => ({ id: `doc-${Date.now()}`, fileName: payload.fileName, mimeType: payload.mimeType, uploadedAt: new Date().toISOString() });
export const generatePdf = async (recordId: string): Promise<{ recordId: string; url: string }> => ({ recordId, url: `/mock-pdf/${recordId}.pdf` });

export const getModuleDefinitions = async (): Promise<ModuleDefinition[]> => modules;
