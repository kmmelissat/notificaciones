
export class EmailNotification extends AbstractNotification {
  send(): string {
    return `Sent to ${this.receiver} email to `;
  }
}
