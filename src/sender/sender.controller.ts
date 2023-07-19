import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  UseFilters,
} from '@nestjs/common';
import { SenderService } from './sender.service';
import { CreateSenderDto } from './dto/create-sender.dto';
import { UpdateSenderDto } from './dto/update-sender.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { SenderEntity } from './entities/sender.entity';
import { PrismaClientExceptionFilter } from 'src/prisma-client-exception/prisma-client-exception.filter';

@Controller('sender')
@ApiTags('sender')
@UseFilters(PrismaClientExceptionFilter)
export class SenderController {
  constructor(private readonly senderService: SenderService) {}

  @Post()
  @ApiCreatedResponse({ type: SenderEntity })
  create(@Body() createSenderDto: CreateSenderDto) {
    return this.senderService.create(createSenderDto);
  }

  @Get()
  @ApiCreatedResponse({ type: SenderEntity, isArray: true })
  findAll() {
    return this.senderService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({ type: SenderEntity })
  async findOne(@Param('id') id: string) {
    const sender = await this.senderService.findOne(id);

    if (!sender) {
      throw new NotFoundException(`Parcel with id: ${id} not found`);
    }

    return sender;
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: SenderEntity })
  update(@Param('id') id: string, @Body() updateSenderDto: UpdateSenderDto) {
    return this.senderService.update(id, updateSenderDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: SenderEntity })
  remove(@Param('id') id: string) {
    return this.senderService.remove(id);
  }
}
