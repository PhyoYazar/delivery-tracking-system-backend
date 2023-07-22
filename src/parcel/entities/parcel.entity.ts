import { ApiProperty } from '@nestjs/swagger';
import { Parcel } from '@prisma/client';

export class ParcelEntity implements Parcel {
  @ApiProperty()
  id: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;

  @ApiProperty()
  price: number;

  @ApiProperty()
  picked_up: boolean;

  @ApiProperty()
  arrived_warehouse: boolean;

  @ApiProperty()
  deliver: boolean;

  @ApiProperty()
  finish: boolean;

  @ApiProperty()
  sender_id: string;

  @ApiProperty()
  receiver_id: string;

  @ApiProperty({ required: false, nullable: true })
  user_id: string | null;

  @ApiProperty({ required: false, nullable: true })
  location_id: string | null;
}
