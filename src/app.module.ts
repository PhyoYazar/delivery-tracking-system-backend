import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ArticleModule } from './article/article.module';
import { ParcelModule } from './parcel/parcel.module';

@Module({
  imports: [PrismaModule, ArticleModule, ParcelModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
