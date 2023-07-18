import { PartialType } from '@nestjs/swagger';
import { CreateParcelDto } from './create-parcel.dto';

export class UpdateParcelDto extends PartialType(CreateParcelDto) {}
