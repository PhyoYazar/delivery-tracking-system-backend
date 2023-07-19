import { Module } from '@nestjs/common';
import { SenderService } from './sender.service';
import { SenderController } from './sender.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [SenderController],
  providers: [SenderService],
  imports: [PrismaModule],
})
export class SenderModule {}
