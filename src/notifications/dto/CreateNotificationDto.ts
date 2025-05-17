import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateNotificationDto {

    @IsString()
    @IsNotEmpty()
    receiver: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    phoneNumber: string;

    @IsString()
    @IsNotEmpty()
    area: string;
}