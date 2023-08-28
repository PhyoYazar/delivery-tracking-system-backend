import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class GetSenderDto {
  @IsString()
  @IsOptional()
  @ApiProperty()
  township_id: string;
}
