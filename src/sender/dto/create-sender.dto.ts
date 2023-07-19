import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateSenderDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  phone_number: string;

  @IsString()
  @ApiProperty()
  address: string;

  @IsString()
  @ApiProperty()
  township: string;

  @IsString()
  @ApiProperty()
  city: string;
}
