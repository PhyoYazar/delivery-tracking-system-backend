import { PartialType } from '@nestjs/swagger';
import { CreateTownshipDto } from './create-township.dto';

export class UpdateTownshipDto extends PartialType(CreateTownshipDto) {}
