import { get as _get, set as _set } from 'lodash';

export abstract class BaseAction {
  constructor(protected input_data: any, protected path: string) {}

  abstract input_valid(): boolean;

  abstract run(): any;

  get target_data(): any {
    return _get(this.input_data, this.path);
  }

  set target_data(value) {
    _set(this.input_data, this.path, value);
  }
}
