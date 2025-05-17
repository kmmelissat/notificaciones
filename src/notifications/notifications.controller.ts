import { Controller } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { EmailNotification } from './notifications/email-notification';
import { SmsNotification } from './notifications/sms-notification';
import { WhatsappNotification } from './notifications/whatsapp-notification';
import { Body } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Notificable } from './abstract/abstractNotification'

@Controller('notifications')
export class NotificationsController {
    constructor(private readonly notificationsService: NotificationsService) { }

    @Post()
    async create(@Body() createNotificationDto: CreateNotificationDto) {
        let notificationType: Notificable;

        switch (createNotificationDto.type) {
            case 'email':
                notificationType = new EmailNotification(createNotificationDto.email);
                break;
            case 'sms':
                notificationType = new SmsNotification(createNotificationDto.phoneNumber, createNotificationDto.area);
                break;
            case 'ws':
                notificationType = new WhatsappNotification(createNotificationDto.phoneNumber, createNotificationDto.area);
                break;
            default:
                throw new Error('Unknown notification type');
        }

        const result = await notificationType.sent();
        return result;
    }
}
