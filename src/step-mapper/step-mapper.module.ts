import { Module } from '@nestjs/common';
import { StepMapperController } from './step-mapper.controller';

@Module({
  controllers: [StepMapperController]
})
export class StepMapperModule {}
