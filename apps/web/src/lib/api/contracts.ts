import type { IntelligenceOverview, SWOT } from '../intelligence/intelligence.types';
import type { Task } from '../tasks/task.types';
import type { Notification } from '../workflow/workflow.notifications';
import type { WorkflowOccurrence, WorkflowTimelineEntry, WorkflowTransition } from '../workflow/workflow.types';

export interface WorkflowOccurrenceResponse {
  data: WorkflowOccurrence[];
}

export interface WorkflowTransitionResponse {
  data: WorkflowTransition[];
}

export interface WorkflowTimelineResponse {
  data: WorkflowTimelineEntry[];
}

export interface NotificationResponse {
  data: Notification[];
}

export interface TaskResponse {
  data: Task[];
}

export interface IntelligenceOverviewResponse {
  data: IntelligenceOverview;
}

export interface SWOTResponse {
  data: SWOT;
}
