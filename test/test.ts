import { readFileSync } from 'fs';
import { join } from 'path';

import { MappingDefinition } from '../src/step-mapper/models/mapping-definition.model';
import { StepMapperLogic } from '../src/step-mapper/step-mapper.logic';

/**
 * LOAD TEST DATA
 */
const input_data = JSON.parse(
  readFileSync(join(__dirname, './json/river_data.json')).toString(),
);

const platform_data = JSON.parse(
  readFileSync(
    join(__dirname, './json/cf-module/convert_sink/platform.json'),
  ).toString(),
);

const mapping_data = JSON.parse(
  readFileSync(
    join(__dirname, './json/cf-module/convert_sink/mapping.json'),
  ).toString(),
);

/**
 * Setup
 */
const mapping_definition = MappingDefinition.load_from_json(mapping_data);
const mapper = new StepMapperLogic(input_data, mapping_definition);

/**
 * Test
 */
const modules = mapper.get_mapping_modules();
// const _module = modules[1];
// const mappings = mapper.get_module_mappings(_module);

const result = {
  platform: platform_data,
};

for (const module of modules) {
  const mappings = mapper.get_module_mappings(module);
  for (const mapping of mappings) {
    mapper.process_module_mapping(module, mapping, result);
  }
}

console.dir(result, {
  depth: 3,
});
