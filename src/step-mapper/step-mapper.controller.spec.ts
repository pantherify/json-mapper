import { Test, TestingModule } from '@nestjs/testing';
import { StepMapperController } from './step-mapper.controller';

describe('StepMapperController', () => {
  let controller: StepMapperController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StepMapperController],
    }).compile();

    controller = module.get<StepMapperController>(StepMapperController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
