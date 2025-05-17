import { AbstractNotification } from "../abstract/abstractNotification";

export class SmsNotification extends AbstractNotification {

    phoneNumber: string;
    area: string;

    constructor(phoneNumber: string, area: string) {
        super();
        this.phoneNumber = phoneNumber;
        this.area = area;
    }

    async sent(): Promise<string> {
        return `Sent to ${this.receiver} SMS to +${this.area}${this.phoneNumber}`;
    }
}
