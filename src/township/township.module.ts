import { Module } from '@nestjs/common';
import { TownshipService } from './township.service';
import { TownshipController } from './township.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [TownshipController],
  providers: [TownshipService],
  imports: [PrismaModule],
})
export class TownshipModule {}
