export interface NotificationInterface {
  setReceiver(receiver: string): void;
  send(): string;
}