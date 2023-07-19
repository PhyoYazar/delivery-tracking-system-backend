import { ApiProperty } from '@nestjs/swagger';
import { Receiver } from '@prisma/client';

export class ReceiverEntity implements Receiver {
  @ApiProperty()
  id: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  name: string;

  @ApiProperty()
  phone_number: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  township: string;

  @ApiProperty()
  city: string;
}
