import { Test, TestingModule } from '@nestjs/testing';
import { ParcelController } from './parcel.controller';
import { ParcelService } from './parcel.service';

describe('ParcelController', () => {
  let controller: ParcelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParcelController],
      providers: [ParcelService],
    }).compile();

    controller = module.get<ParcelController>(ParcelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
