import {
  createRecord as createRecordMock,
  generatePdf as generatePdfMock,
  getDamageRecords as getDamageRecordsMock,
  getDashboardMetrics as getDashboardMetricsMock,
  getDrivers as getDriversMock,
  getFleetStatus as getFleetStatusMock,
  getInsights as getInsightsMock,
  getProviders as getProvidersMock,
  getRoutes as getRoutesMock,
  getSchedules as getSchedulesMock,
  getSectors as getSectorsMock,
  getServiceRecords as getServiceRecordsMock,
  getVehicles as getVehiclesMock,
  suggestOperationalScale as suggestOperationalScaleMock,
  updateRecord as updateRecordMock,
  uploadFile as uploadFileMock,
} from './mockApi';

// Esta camada funciona como adapter/facade entre frontend e backend.
export const getDashboardMetrics = () => getDashboardMetricsMock();
export const getVehicles = () => getVehiclesMock();
export const getDrivers = () => getDriversMock();
export const getProviders = () => getProvidersMock();
export const getRoutes = () => getRoutesMock();
export const getSchedules = () => getSchedulesMock();
export const getServiceRecords = () => getServiceRecordsMock();
export const getDamageRecords = () => getDamageRecordsMock();
export const getFleetStatus = () => getFleetStatusMock();
export const getSectors = () => getSectorsMock();
export const getInsights = () => getInsightsMock();
export const suggestOperationalScale = (input: { chapa: string; dateTimeISO: string }) => suggestOperationalScaleMock(input);
export const createRecord = <T extends object>(payload: T) => createRecordMock(payload);
export const updateRecord = <T extends object>(id: string, payload: T) => updateRecordMock(id, payload);
export const uploadFile = (payload: { fileName: string; mimeType: string }) => uploadFileMock(payload);
export const generatePdf = (recordId: string) => generatePdfMock(recordId);
