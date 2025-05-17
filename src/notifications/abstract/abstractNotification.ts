export interface Notificable {
    sent(): Promise<string>;
}

export abstract class AbstractNotification implements Notificable {
    receiver: string;
    setReciever(receiver: string): void {
        this.receiver = receiver;
    }

    abstract sent(): Promise<string>;
}
