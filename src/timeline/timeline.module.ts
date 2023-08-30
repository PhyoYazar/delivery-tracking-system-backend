import { Module } from '@nestjs/common';
import { TimelineService } from './timeline.service';
import { TimelineController } from './timeline.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [TimelineController],
  providers: [TimelineService],
  imports: [PrismaModule],
})
export class TimelineModule {}
