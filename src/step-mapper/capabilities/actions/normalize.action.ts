import { set as _set } from 'lodash';

import { TargetUtilities } from '../targets/utilities';
import { BaseAction } from './base.action';

export class NormalizeAction extends BaseAction {
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
      const converter = TargetUtilities.get_target_class(this.refs[key]);
      _set(obj, key, new converter(this.refs[key], this.bag).convert(obj[key]));
    }
  }
}
