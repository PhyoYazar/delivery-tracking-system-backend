import { ApiProperty } from '@nestjs/swagger';

export class Timeline {
  @ApiProperty()
  id: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;

  @ApiProperty()
  type: string;

  @ApiProperty()
  parcel_id: string;
}
