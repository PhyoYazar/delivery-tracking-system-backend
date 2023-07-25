import { ApiProperty } from '@nestjs/swagger';
import { Role, User } from '@prisma/client';

export class UserEntity implements User {
  @ApiProperty()
  id: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  phone_number: string | null;

  @ApiProperty()
  address: string | null;

  @ApiProperty()
  city_id: string | null;

  @ApiProperty()
  township_id: string | null;

  @ApiProperty()
  role: Role;
}
