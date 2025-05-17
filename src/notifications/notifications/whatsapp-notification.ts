
export class WhatsappNotification extends AbstractNotification {
  send(): string {
    return `Sent to ${this.receiver} WhatsApp message to `;
  }
}
