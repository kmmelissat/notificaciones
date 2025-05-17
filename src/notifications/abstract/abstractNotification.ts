export interface Notifcable {
    sent(): Promise<string>;
}

export abstract class AbstractNotification implements Notifcable {
    receiver: string;
    setReciever(receiver: string): void {
        this.receiver = receiver;
    }

    abstract sent(): Promise<string>;
}
