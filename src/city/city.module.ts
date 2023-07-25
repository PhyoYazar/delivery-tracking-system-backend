import { Module } from '@nestjs/common';
import { CityService } from './city.service';
import { CityController } from './city.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [CityController],
  providers: [CityService],
  imports: [PrismaModule],
})
export class CityModule {}
