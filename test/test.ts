import { readFileSync } from 'fs';
import { join } from 'path';

import { MappingDefinition } from '../src/step-mapper/models/mapping-definition.model';
import { StepMapperLogic } from '../src/step-mapper/step-mapper.logic';


/**
 * LOAD TEST DATA
 */
const input_data = JSON.parse(
    readFileSync(join(__dirname, './json/input.json'))
        .toString()
);

const mapping_data = JSON.parse(
    readFileSync(join(__dirname, './json/mapping.json'))
        .toString()
);

/**
 * Setup
 */
const mapping_definition = MappingDefinition.load_from_json(mapping_data)
const mapper = new StepMapperLogic(input_data, mapping_definition)

/**
 * Test
 */
const modules = mapper.get_mapping_modules()
const mappings = mapper.get_module_mappings(modules[0])

const result = {}

// for (const mapping of mappings) {
//     mapper.process_module_mapping(modules[0], mapping, result)
// }

mapper.process_module_mapping(modules[1], mappings[0], result)

console.log(result);