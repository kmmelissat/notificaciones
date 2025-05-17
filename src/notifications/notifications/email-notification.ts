import { AbstractNotification } from "../abstract/abstractNotification";

export class EmailNotification extends AbstractNotification {

    email: string;

    constructor(email: string) {
        super();
        this.email = email;
    }

    async sent(): Promise<string> {
        return `Sent to ${this.receiver} email to ${this.email}`;
    }
}
