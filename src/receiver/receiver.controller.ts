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
import { ReceiverService } from './receiver.service';
import { CreateReceiverDto } from './dto/create-receiver.dto';
import { UpdateReceiverDto } from './dto/update-receiver.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { ReceiverEntity } from './entities/receiver.entity';
import { PrismaClientExceptionFilter } from 'src/prisma-client-exception/prisma-client-exception.filter';
import { AuthType } from 'src/iam/authentication/enums/auth-type.enum';
import { Auth } from 'src/iam/authentication/decorators/auth.decorator';

@Controller('receiver')
@ApiTags('receiver')
@UseFilters(PrismaClientExceptionFilter)
export class ReceiverController {
  constructor(private readonly receiverService: ReceiverService) {}

  @Auth(AuthType.None)
  @Post()
  @ApiCreatedResponse({ type: ReceiverEntity })
  create(@Body() createReceiverDto: CreateReceiverDto) {
    return this.receiverService.create(createReceiverDto);
  }

  @Auth(AuthType.None)
  @Get()
  @ApiCreatedResponse({ type: ReceiverEntity, isArray: true })
  findAll() {
    return this.receiverService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({ type: ReceiverEntity })
  async findOne(@Param('id') id: string) {
    const receiver = await this.receiverService.findOne(id);

    if (!receiver) {
      throw new NotFoundException(`Receiver with id: ${id} not found`);
    }

    return receiver;
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: ReceiverEntity })
  update(
    @Param('id') id: string,
    @Body() updateReceiverDto: UpdateReceiverDto,
  ) {
    return this.receiverService.update(id, updateReceiverDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: ReceiverEntity })
  remove(@Param('id') id: string) {
    return this.receiverService.remove(id);
  }
}
