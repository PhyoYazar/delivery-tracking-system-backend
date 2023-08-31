import { Module } from '@nestjs/common';
import { ParcelService } from './parcel.service';
import { ParcelController } from './parcel.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  // imports: [PrismaModule, forwardRef(() => TaskSchedulerModule)],
  imports: [PrismaModule],
  controllers: [ParcelController],
  providers: [ParcelService],
  exports: [ParcelService],
})
export class ParcelModule {}
