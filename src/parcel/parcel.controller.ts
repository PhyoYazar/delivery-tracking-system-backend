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
  Query,
} from '@nestjs/common';
import { ParcelService } from './parcel.service';
import { CreateParcelDto } from './dto/create-parcel.dto';
import { UpdateParcelDto } from './dto/update-parcel.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { PrismaClientExceptionFilter } from 'src/prisma-client-exception/prisma-client-exception.filter';
import { ParcelEntity } from './entities/parcel.entity';
import { GetParcelDto } from './dto/get-parcel.dto';
import { UpdateParcelsDto } from './dto/update-parcels.dto';

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

  @Patch('/updates')
  @ApiCreatedResponse({ type: ParcelEntity })
  updateParcels(@Query() updateParcelsDto: UpdateParcelsDto) {
    return this.parcelService.updateParcels(updateParcelsDto);
  }

  @Get()
  @ApiCreatedResponse({ type: ParcelEntity, isArray: true })
  findAll(@Query() getParcelDto: GetParcelDto) {
    return this.parcelService.findAll(getParcelDto);
  }

  @Get(':id')
  @ApiCreatedResponse({ type: ParcelEntity })
  async findOne(@Param('id') id: string) {
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
