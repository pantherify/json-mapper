import { Body, Controller, Post } from '@nestjs/common';

import { MappingDto } from './dto/mapping.dto';
import { MappingDefinition } from './models/mapping-definition.model';
import { StepMapperLogic } from './step-mapper.logic';

@Controller('step-mapper')
export class StepMapperController {
  @Post('map')
  doMapping(@Body() information: MappingDto) {
    const result = information.bag;
    const mapping_definition = MappingDefinition.load_from_json(
      information.mapping,
    );
    const mapper = new StepMapperLogic(
      information.input_data,
      mapping_definition,
    );

    const modules = mapper.get_mapping_modules();

    for (const module of modules) {
      const mappings = mapper.get_module_mappings(module);
      for (const mapping of mappings) {
        mapper.process_module_mapping(module, mapping, result);
      }
    }

    return result;
  }
}
