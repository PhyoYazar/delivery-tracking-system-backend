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
  phone_number?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  township?: string;

  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  @ApiProperty({ required: false })
  price?: number;

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
  @ApiProperty({ required: false })
  arrived_warehouse?: boolean;

  @IsBoolean()
  @IsOptional()
  @Transform(
    ({ value }) => [true, 'enabled', 'true', 1, '1'].indexOf(value) > -1,
  )
  @ApiProperty({ required: false })
  finish?: boolean;
}