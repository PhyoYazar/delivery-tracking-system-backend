import { Module } from '@nestjs/common';
import { TaskSchedulerService } from './task-scheduler.service';

@Module({
  // imports: [PrismaModule, forwardRef(() => ParcelModule)],
  providers: [TaskSchedulerService],
  exports: [TaskSchedulerService],
})
export class TaskSchedulerModule {}
