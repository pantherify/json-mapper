import { set, unset } from 'lodash';

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

    const start = new StartStep(steps, bag, this.input_data, converter, target);

    const naming_path = this.get_naming_path(module, mapping);
    const naming = this.definitions.namings[naming_path];

    if (!naming) {
      throw new Error(`Naming : "${naming_path}" not found`);
    }

    let { output } = start.process();

    set(bag, naming.to, output);
    if (naming.actions.length) bag = this.run_actions(naming, bag);

    unset(bag, 'output');

    return bag;
  }

  private get_naming_path = (module: string, mapping: string) =>
    `${module}.${mapping}`;

  private run_actions(naming: NamingProp, bag: any): any {
    let result = bag;

    for (const _action of naming.actions) {
      const action_class = ActionUtilities.get_action_class(_action);
      if (action_class == null)
        throw new Error(`Action Class ${_action} not found!`);

      const action = new action_class(
        _action,
        result,
        naming.to,
        this.definitions,
      );

      if (!action.input_valid())
        throw new Error('Action Not Valid for this type of object');

      result = action.run();
    }

    return result;
  }
}
7;
