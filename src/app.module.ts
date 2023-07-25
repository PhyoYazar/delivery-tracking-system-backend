import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ArticleModule } from './article/article.module';
import { ParcelModule } from './parcel/parcel.module';
import { SenderModule } from './sender/sender.module';
import { ReceiverModule } from './receiver/receiver.module';
import { IamModule } from './iam/iam.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { CityModule } from './city/city.module';
import { TownshipModule } from './township/township.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PrismaModule,
    ArticleModule,
    ParcelModule,
    SenderModule,
    ReceiverModule,
    IamModule,
    UserModule,
    CityModule,
    TownshipModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
