import { StartStep } from './capabilities/steps/start.step';
import { TargetUtilities } from './capabilities/targets/utilities';
import { MappingDefinition } from './models/mapping-definition.model';


export class StepMapperLogic {

    constructor(
        private input_data: any,
        private definitions: MappingDefinition
    ) { }


    // Get List of Modules to be mapped
    public get_mapping_modules(): string[] {
        return Object.keys(this.definitions.mappings)
    }

    // Get List of Module Mappings
    public get_module_mappings(module: string): string[] {
        return Object.keys(this.definitions.mappings[module])
    }

    public process_module_mapping(module: string, mapping: string) {

        const target = this.definitions.mappings[module][mapping]
        const converter = TargetUtilities.get_target_class(target)

        const steps = [module, ...mapping.split('.')]

        const start = new StartStep(
            steps,
            {},
            this.input_data,
            converter
        )

        return start.process()
    }

}