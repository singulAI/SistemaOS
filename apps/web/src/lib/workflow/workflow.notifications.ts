export type NotificationType =
  | 'NEW_OCCURRENCE'
  | 'SLA_EXPIRED'
  | 'WAITING_APPROVAL'
  | 'VEHICLE_STOPPED'
  | 'TASK_ASSIGNED';

export type NotificationPriority = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';

export interface Notification {
  id: string;
  type: NotificationType;
  priority: NotificationPriority;
  title: string;
  message: string;
  createdAt: string;
  read: boolean;
}

export const mockNotifications: Notification[] = [
  { id: 'n1', type: 'NEW_OCCURRENCE', priority: 'MEDIUM', title: 'Nova ocorrência', message: 'Avaria 97021 registrada na portaria.', createdAt: new Date().toISOString(), read: false },
  { id: 'n2', type: 'SLA_EXPIRED', priority: 'HIGH', title: 'SLA vencido', message: 'Ocorrência aguardando aprovação acima do esperado.', createdAt: new Date().toISOString(), read: false },
];
