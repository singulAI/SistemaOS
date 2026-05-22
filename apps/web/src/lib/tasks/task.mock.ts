import { mockNotifications } from '../workflow/workflow.notifications';
import type { Task } from './task.types';

export const mockTasks: Task[] = [
  {
    id: 'task-1',
    title: 'Validar orçamento da avaria 97021',
    description: 'Aprovar orçamento de R$315,00 para reparo inicial.',
    assignedToSector: 'FINANCEIRO',
    status: 'WAITING_APPROVAL',
    priority: 'HIGH',
  },
];

export const operationalCenterMock = {
  tasks: mockTasks,
  approvals: mockTasks.filter((task) => task.status === 'WAITING_APPROVAL'),
  internalCommunication: [{ id: 'comm-1', channel: 'MANUTENCAO-FINANCEIRO', message: 'Aguardando validação de custo.' }],
  delegations: [{ id: 'del-1', from: 'GESTAO', to: 'FINANCEIRO', reason: 'Aprovação de orçamento' }],
  notifications: mockNotifications,
};
