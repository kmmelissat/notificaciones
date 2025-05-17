import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsOptional,
  IsIn,
} from 'class-validator';

export class CreateNotificationDto {
  @IsString()
  @IsNotEmpty()
  @IsIn(['email', 'sms', 'ws'])
  type: string;

  @IsString()
  @IsNotEmpty()
  receiverName: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  phoneNumber?: string;

  @IsString()
  @IsOptional()
  area?: string;

  @IsString()
  @IsNotEmpty()
  message: string;
}
