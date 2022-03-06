import { set } from 'lodash';

import { ActionUtilities } from './capabilities/actions/utilities';
import { StartStep } from './capabilities/steps/start.step';
import { TargetUtilities } from './capabilities/targets/utilities';
import { MappingDefinition } from './models/mapping-definition.model';
import { NamingProp } from './models/naming-prop.model';

export class StepMapperLogic {
  constructor(
    private input_data: any,
    private definitions: MappingDefinition,
  ) {}

  // Get List of Modules to be mapped
  public get_mapping_modules(): string[] {
    return Object.keys(this.definitions.mappings);
  }

  // Get List of Module Mappings
  public get_module_mappings(module: string): string[] {
    return Object.keys(this.definitions.mappings[module]);
  }

  public process_module_mapping(
    module: string,
    mapping: string,
    bag: any = {},
  ) {
    const target = this.definitions.mappings[module][mapping];
    const converter = TargetUtilities.get_target_class(target);

    const steps = [module, ...mapping.split('.')];

    const start = new StartStep(steps, {}, this.input_data, converter, target);

    const naming_path = this.get_naming_path(module, mapping);
    const naming = this.definitions.namings[naming_path];

    let { output } = start.process();

    if (naming.actions.length) output = this.run_actions(naming, output);

    set(bag, naming.to, output);

    return bag;
  }

  private get_naming_path = (module: string, mapping: string) =>
    `${module}.${mapping}`;

  private run_actions(naming: NamingProp, input: any): any {
    let result = input;

    for (const _action of naming.actions) {
      const action_class = ActionUtilities.get_action_class(_action);
      const action = new action_class(result);

      if (!action.input_valid())
        throw new Error('Action Not Valid for this type of object');

      result = action.run();
    }

    return result;
  }
}
