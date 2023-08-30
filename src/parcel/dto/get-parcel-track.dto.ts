import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class GetParcelTrackDto {
  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  customer_name?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  phone_number?: string;
}
