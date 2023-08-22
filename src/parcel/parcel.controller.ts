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
import { ActiveUser } from 'src/iam/decorators/active-user.decorator';
import { AuthType } from 'src/iam/authentication/enums/auth-type.enum';
import { Auth } from 'src/iam/authentication/decorators/auth.decorator';
import { Role } from '@prisma/client';

@Controller('parcels')
@ApiTags('parcel')
@UseFilters(PrismaClientExceptionFilter)
export class ParcelController {
  constructor(private readonly parcelService: ParcelService) {}

  @Auth(AuthType.None)
  @Post()
  @ApiCreatedResponse({ type: ParcelEntity })
  create(@Body() createParcelDto: CreateParcelDto) {
    return this.parcelService.create(createParcelDto);
  }

  @Auth(AuthType.None)
  @Get()
  @ApiCreatedResponse({ type: ParcelEntity, isArray: true })
  findAll(@Query() getParcelDto: GetParcelDto) {
    return this.parcelService.findAll(getParcelDto);
  }

  @Get('/user')
  @ApiCreatedResponse({ type: ParcelEntity })
  async findParcelsByUser(
    @ActiveUser('sub') sub: string,
    @Query() getParcelDto: GetParcelDto,
  ) {
    const parcel = await this.parcelService.findParcelsByUser(
      sub,
      getParcelDto,
    );

    if (!parcel) {
      throw new NotFoundException(`Parcel with User id: ${sub} not found`);
    }

    return parcel;
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

  @Patch('/updates')
  @ApiCreatedResponse({ type: ParcelEntity })
  updateParcels(@Query() updateParcelsDto: UpdateParcelsDto) {
    return this.parcelService.updateParcels(updateParcelsDto);
  }

  @Auth(AuthType.None)
  @Patch('/auto-assign/:id')
  @ApiCreatedResponse({ type: ParcelEntity })
  updateAssignee(@Param('id') id: string, @Body() data: { role: Role }) {
    return this.parcelService.autoAssign(id, data.role);
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
