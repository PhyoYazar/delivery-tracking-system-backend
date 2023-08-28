import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class GetParcelDto {
  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  name?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  keyword?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  parcel_name?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  description?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  phone_number?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  sender_township?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  receiver_township?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  sender_address?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  receiver_address?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  pickerId?: string;

  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  @ApiProperty({ required: false })
  price?: number;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  user_id?: string;

  @IsBoolean()
  @IsOptional()
  @Transform(
    ({ value }) => [true, 'enabled', 'true', 1, '1'].indexOf(value) > -1,
  )
  @ApiProperty({ required: false, type: Boolean })
  picked_up?: boolean;

  @IsBoolean()
  @IsOptional()
  @Transform(
    ({ value }) => [true, 'enabled', 'true', 1, '1'].indexOf(value) > -1,
  )
  @ApiProperty({ required: false, type: Boolean })
  accept_picked_up?: boolean;

  @IsBoolean()
  @IsOptional()
  @Transform(
    ({ value }) => [true, 'enabled', 'true', 1, '1'].indexOf(value) > -1,
  )
  @ApiProperty({ required: false })
  arrived_warehouse?: boolean;

  @IsBoolean()
  @IsOptional()
  @Transform(
    ({ value }) => [true, 'enabled', 'true', 1, '1'].indexOf(value) > -1,
  )
  @ApiProperty({ required: false })
  deliver?: boolean;

  @IsBoolean()
  @IsOptional()
  @Transform(
    ({ value }) => [true, 'enabled', 'true', 1, '1'].indexOf(value) > -1,
  )
  @ApiProperty({ required: false })
  accept_deliver?: boolean;

  @IsBoolean()
  @IsOptional()
  @Transform(
    ({ value }) => [true, 'enabled', 'true', 1, '1'].indexOf(value) > -1,
  )
  @ApiProperty({ required: false })
  finish?: boolean;
}
