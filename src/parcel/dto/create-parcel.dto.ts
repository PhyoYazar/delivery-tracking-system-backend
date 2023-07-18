import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateParcelDto {
  @IsNumber()
  @ApiProperty()
  price: number;

  @IsString()
  @ApiProperty()
  receiver_name: string;

  @IsString()
  @ApiProperty()
  receiver_phone_number: string;

  @IsString()
  @ApiProperty()
  sender_name: string;

  @IsString()
  @ApiProperty()
  sender_phone_number: string;
}
