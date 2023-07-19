import { PartialType } from '@nestjs/swagger';
import { CreateReceiverDto } from './create-receiver.dto';

export class UpdateReceiverDto extends PartialType(CreateReceiverDto) {}
