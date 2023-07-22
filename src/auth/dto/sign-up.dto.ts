import { ApiProperty } from '@nestjs/swagger';
import {
  IsLowercase,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
  min,
} from 'class-validator';

export class SignUpDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsLowercase()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @Min(6)
  password: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  role: 'deliver' | 'admin' | 'super_admin';

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  phone_number: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  address: string;

  @IsString()
  @ApiProperty({ required: false })
  township: string;

  @IsString()
  @ApiProperty({ required: false })
  city: string;
}
