import { Module } from '@nestjs/common';
import { StepMapperModule } from './step-mapper/step-mapper.module';

@Module({
  imports: [StepMapperModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
