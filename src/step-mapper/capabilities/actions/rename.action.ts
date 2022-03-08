import { has as _has, set as _set, unset as _unset } from 'lodash';

import { BaseAction } from './base.action';

export class RenameAction extends BaseAction {
  input_valid(): boolean {
    return !!this.refs;
  }
  run() {
    if (Array.isArray(this.action_data)) this.run_array();
    else this.run_object(this.action_data);

    return this.bag;
  }

  private run_array() {
    for (const obj of this.action_data) {
      this.run_object(obj);
    }
  }

  private run_object(obj: any) {
    for (const key in this.refs) {
      if (!_has(obj, key)) continue;

      _set(obj, this.refs[key], obj[key]);
      _unset(obj, key);
    }
  }
}
