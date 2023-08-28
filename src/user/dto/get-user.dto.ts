import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { IsEmail, IsEnum, IsOptional, IsString } from 'class-validator';

export class GetUserDto {
  @IsString()
  @ApiProperty()
  @IsOptional()
  name: string;

  @IsEmail()
  @ApiProperty()
  @IsOptional()
  email: string;

  @IsEnum(Role)
  @IsOptional()
  @ApiProperty()
  role: Role;

  @IsString()
  @IsOptional()
  @ApiProperty()
  township_id: string;
}
