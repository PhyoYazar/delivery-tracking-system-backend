import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateParcelDto {
  @IsNumber()
  @ApiProperty()
  price: number;

  @IsString()
  @ApiProperty()
  receiver_id: string;

  @IsString()
  @ApiProperty()
  sender_id: string;
}
