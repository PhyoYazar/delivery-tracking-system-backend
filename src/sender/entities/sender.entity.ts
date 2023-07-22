import { ApiProperty } from '@nestjs/swagger';
import { Sender } from '@prisma/client';

export class SenderEntity implements Sender {
  @ApiProperty()
  id: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;

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
