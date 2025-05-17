
export class SmsNotification extends AbstractNotification {
  send(): string {
    return `Sent to ${this.receiver} SMS to `;
  }
}
