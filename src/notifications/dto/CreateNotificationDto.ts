import { IsNotEmpty, IsString } from 'class-validator';

export class CreateNotificationDto {
    @IsString()
    @IsNotEmpty()
    receiver: string;

}