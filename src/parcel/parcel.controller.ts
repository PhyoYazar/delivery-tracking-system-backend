import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseFilters,
  NotFoundException,
} from '@nestjs/common';
import { ParcelService } from './parcel.service';
import { CreateParcelDto } from './dto/create-parcel.dto';
import { UpdateParcelDto } from './dto/update-parcel.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { PrismaClientExceptionFilter } from 'src/prisma-client-exception/prisma-client-exception.filter';
import { ParcelEntity } from './entities/parcel.entity';

@Controller('parcels')
@ApiTags('parcel')
@UseFilters(PrismaClientExceptionFilter)
export class ParcelController {
  constructor(private readonly parcelService: ParcelService) {}

  @Post()
  @ApiCreatedResponse({ type: ParcelEntity })
  create(@Body() createParcelDto: CreateParcelDto) {
    return this.parcelService.create(createParcelDto);
  }

  @Get()
  @ApiCreatedResponse({ type: ParcelEntity, isArray: true })
  findAll() {
    return this.parcelService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({ type: ParcelEntity })
  async findOne(@Param('id') id: string) {
    console.log('id', id);
    const parcel = await this.parcelService.findOne(id);

    if (!parcel) {
      throw new NotFoundException(`Parcel with id: ${id} not found`);
    }

    return parcel;
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: ParcelEntity })
  update(@Param('id') id: string, @Body() updateParcelDto: UpdateParcelDto) {
    return this.parcelService.update(id, updateParcelDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: ParcelEntity })
  remove(@Param('id') id: string) {
    return this.parcelService.remove(id);
  }
}
