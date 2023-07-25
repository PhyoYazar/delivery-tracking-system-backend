import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TownshipService } from './township.service';
import { CreateTownshipDto } from './dto/create-township.dto';
import { UpdateTownshipDto } from './dto/update-township.dto';

@Controller('township')
export class TownshipController {
  constructor(private readonly townshipService: TownshipService) {}

  @Post()
  create(@Body() createTownshipDto: CreateTownshipDto) {
    return this.townshipService.create(createTownshipDto);
  }

  @Get()
  findAll() {
    return this.townshipService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.townshipService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTownshipDto: UpdateTownshipDto,
  ) {
    return this.townshipService.update(id, updateTownshipDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.townshipService.remove(id);
  }
}
