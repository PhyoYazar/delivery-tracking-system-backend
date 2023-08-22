import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateParcelDto {
  // @IsNumber()
  // @ApiProperty()
  // price: number;

  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  @IsOptional()
  description?: string;

  @IsString()
  @ApiProperty()
  receiver_id: string;

  @IsString()
  @ApiProperty()
  sender_id: string;
}
