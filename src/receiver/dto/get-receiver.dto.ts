import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class GetReceiverDto {
  @IsString()
  @IsOptional()
  @ApiProperty()
  township_id: string;
}
