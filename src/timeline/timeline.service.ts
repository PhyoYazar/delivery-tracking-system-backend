import { Injectable } from '@nestjs/common';
import { CreateTimelineDto } from './dto/create-timeline.dto';
import { UpdateTimelineDto } from './dto/update-timeline.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetTimelineDto } from './dto/get-timeline.dto';

@Injectable()
export class TimelineService {
  constructor(private readonly prisma: PrismaService) {}

  create(createTimelineDto: CreateTimelineDto) {
    return this.prisma.timeline.create({ data: createTimelineDto });
  }

  findAll(getTimelineDto: GetTimelineDto) {
    return this.prisma.timeline.findMany({
      where: { parcel_id: getTimelineDto.parcel_id },
    });
  }

  findOne(id: string) {
    return this.prisma.timeline.findUnique({ where: { id } });
  }

  update(id: string, updateTimelineDto: UpdateTimelineDto) {
    return this.prisma.timeline.update({
      where: { id },
      data: updateTimelineDto,
    });
  }

  remove(id: string) {
    return this.prisma.timeline.delete({ where: { id } });
  }
}
