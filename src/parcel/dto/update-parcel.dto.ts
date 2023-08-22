import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateParcelDto } from './create-parcel.dto';
import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class UpdateParcelDto extends PartialType(CreateParcelDto) {
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

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  user_id?: string | null;
}
