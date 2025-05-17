import { Controller, Body, Post, BadRequestException } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { EmailNotification } from './notifications/email-notification';
import { SmsNotification } from './notifications/sms-notification';
import { WhatsappNotification } from './notifications/whatsapp-notification';
import { Notificable } from './abstract/abstractNotification';
import { CreateNotificationDto } from './dto/CreateNotificationDto';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post()
  async create(@Body() createNotificationDto: CreateNotificationDto) {
    let notificationType: Notificable;

    try {
      switch (createNotificationDto.type) {
        case 'email':
          if (!createNotificationDto.email) {
            throw new BadRequestException(
              'Email is required for email notifications',
            );
          }
          notificationType = new EmailNotification(
            createNotificationDto.email,
            createNotificationDto.message,
            createNotificationDto.receiverName,
          );
          break;
        case 'sms':
          if (
            !createNotificationDto.phoneNumber ||
            !createNotificationDto.area
          ) {
            throw new BadRequestException(
              'Phone number and area are required for SMS notifications',
            );
          }
          notificationType = new SmsNotification(
            createNotificationDto.phoneNumber,
            createNotificationDto.area,
            createNotificationDto.message,
            createNotificationDto.receiverName,
          );
          break;
        case 'ws':
          if (
            !createNotificationDto.phoneNumber ||
            !createNotificationDto.area
          ) {
            throw new BadRequestException(
              'Phone number and area are required for WhatsApp notifications',
            );
          }
          notificationType = new WhatsappNotification(
            createNotificationDto.phoneNumber,
            createNotificationDto.area,
            createNotificationDto.message,
            createNotificationDto.receiverName,
          );
          break;
        default:
          throw new BadRequestException('Unknown notification type');
      }

      const result = await notificationType.sent();
      return { success: true, message: result };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new BadRequestException(
        'Failed to send notification: ' + error.message,
      );
    }
  }
}
