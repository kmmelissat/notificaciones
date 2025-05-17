import { Controller } from '@nestjs/common';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}


    @Post()
    async create(@Body() createNotificationDto: CreateNotificationDto) {
        let notificationType: Notifiable;

        switch (createNotificationDto.type) {
            case 'email':
                notificationType = new EmailNotification();
                break;
            case 'sms':
                notificationType = new SMSNotification();
                break;

            case 'ws':
                notificationType = new WhatsAppNotification();
                break;
            default:
                throw new Error('Unknown notification type');
        }


        notificationType.setReceiver(createNotificationDto.receiver);

        const result = await notificationType.sent();
        return result;
    }
}
