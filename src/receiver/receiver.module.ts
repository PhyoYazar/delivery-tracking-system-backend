import { Module } from '@nestjs/common';
import { ReceiverService } from './receiver.service';
import { ReceiverController } from './receiver.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ReceiverController],
  providers: [ReceiverService],
  imports: [PrismaModule],
})
export class ReceiverModule {}
