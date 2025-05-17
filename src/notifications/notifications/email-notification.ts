import { AbstractNotification } from '../abstract/abstractNotification';

export class EmailNotification extends AbstractNotification {
  private email: string;
  private message: string;
  private receiverName: string;

  constructor(email: string, message: string, receiverName: string) {
    super();
    this.email = email;
    this.message = message;
    this.receiverName = receiverName;
    this.setReciever(email);
  }

  async sent(): Promise<string> {
    return `Sent to ${this.receiverName} email to ${this.receiver}`;
  }
}
