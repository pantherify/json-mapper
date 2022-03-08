import { get as _get, set as _set } from 'lodash';

import { MappingDefinition } from '../../models/mapping-definition.model';

export abstract class BaseAction {
  constructor(
    protected action: string,
    protected bag: any,
    protected path: string,
    protected definitions: MappingDefinition,
  ) {}

  abstract input_valid(): boolean;

  abstract run(): any;

  get action_data(): any {
    return _get(this.bag, this.path);
  }

  set action_data(value) {
    _set(this.bag, this.path, value);
  }

  get to_data() {
    return _get(this.bag, this.to_key);
  }

  set to_data(value) {
    _set(this.bag, this.to_key, value);
  }

  get to_key() {
    const actionParams = this.action.split(':');
    if (actionParams.length < 2)
      throw new Error('Action Merge not well defined!');

    return actionParams[1];
  }

  get refs(): any {
    return this.definitions.refs[this.to_key];
  }
}
