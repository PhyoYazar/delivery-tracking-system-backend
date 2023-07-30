import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateParcelsDto {
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  @ApiProperty()
  parcels: string[];

  @IsBoolean()
  @IsOptional()
  @Transform(
    ({ value }) => [true, 'enabled', 'true', 1, '1'].indexOf(value) > -1,
  )
  @ApiProperty({ required: false })
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
  deliver?: boolean;

  @IsBoolean()
  @IsOptional()
  @Transform(
    ({ value }) => [true, 'enabled', 'true', 1, '1'].indexOf(value) > -1,
  )
  @ApiProperty({ required: false })
  finish?: boolean;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  user_id?: string | null;
}
