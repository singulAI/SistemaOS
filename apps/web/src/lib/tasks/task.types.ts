export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'WAITING_APPROVAL' | 'DONE';
export type TaskPriority = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';

export interface Task {
  id: string;
  title: string;
  description: string;
  assignedToSector: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueAt?: string;
}
