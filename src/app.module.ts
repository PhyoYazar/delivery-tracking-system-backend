import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ArticleModule } from './article/article.module';
import { ParcelModule } from './parcel/parcel.module';
import { SenderModule } from './sender/sender.module';
import { ReceiverModule } from './receiver/receiver.module';

@Module({
  imports: [
    PrismaModule,
    ArticleModule,
    ParcelModule,
    SenderModule,
    ReceiverModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
