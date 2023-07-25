import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTownshipDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  city_id: string;
}
