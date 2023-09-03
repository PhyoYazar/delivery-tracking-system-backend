import { ApiProperty } from '@nestjs/swagger';
import { Timeline, TimelineType } from '@prisma/client';

export class TimelineEntity implements Timeline {
  @ApiProperty()
  id: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;

  @ApiProperty()
  type: TimelineType;

  @ApiProperty()
  parcel_id: string;
}
