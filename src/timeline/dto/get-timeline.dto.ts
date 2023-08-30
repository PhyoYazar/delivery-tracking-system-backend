import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class GetTimelineDto {
  @IsString()
  @IsOptional()
  @ApiProperty()
  parcel_id: string;
}
