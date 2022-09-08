export interface NotificationType {
  open: boolean;
  mainMessage?: string;
  message: string;
  type: 'error' | 'success';
}