import { ApiProperty } from '@nestjs/swagger';
import { TimelineType } from '@prisma/client';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export class CreateTimelineDto {
  @IsEnum(TimelineType)
  @IsOptional()
  @ApiProperty()
  type: TimelineType;

  @IsString()
  @IsOptional()
  @ApiProperty()
  parcel_id: string;
}
