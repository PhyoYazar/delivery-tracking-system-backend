import { Module } from '@nestjs/common';
import { ParcelService } from './parcel.service';
import { ParcelController } from './parcel.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ParcelController],
  providers: [ParcelService],
  imports: [PrismaModule],
})
export class ParcelModule {}
