import { AbstractNotification } from '../abstract/abstractNotification';

export class WhatsappNotification extends AbstractNotification {
  private phoneNumber: string;
  private area: string;
  private message: string;
  private receiverName: string;

  constructor(
    phoneNumber: string,
    area: string,
    message: string,
    receiverName: string,
  ) {
    super();
    this.phoneNumber = phoneNumber;
    this.area = area;
    this.message = message;
    this.receiverName = receiverName;
    this.setReciever(`${area}${phoneNumber}`);
  }

  async sent(): Promise<string> {
    return `Sent to ${this.receiverName} WhatsApp message to +${this.receiver}`;
  }
}
