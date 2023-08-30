import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TimelineService } from './timeline.service';
import { CreateTimelineDto } from './dto/create-timeline.dto';
import { UpdateTimelineDto } from './dto/update-timeline.dto';
import { GetTimelineDto } from './dto/get-timeline.dto';

@Controller('timeline')
export class TimelineController {
  constructor(private readonly timelineService: TimelineService) {}

  @Post()
  create(@Body() createTimelineDto: CreateTimelineDto) {
    return this.timelineService.create(createTimelineDto);
  }

  @Get()
  findAll(@Body() getTimelineDto: GetTimelineDto) {
    return this.timelineService.findAll(getTimelineDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.timelineService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTimelineDto: UpdateTimelineDto,
  ) {
    return this.timelineService.update(id, updateTimelineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.timelineService.remove(id);
  }
}
