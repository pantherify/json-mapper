import { set as _set, unset as _unset } from 'lodash';

import { BaseAction } from './base.action';

export class MergeAction extends BaseAction {
  input_valid(): boolean {
    return (
      !!this.action_data &&
      Array.isArray(this.action_data) &&
      !!this.to_data &&
      Array.isArray(this.to_data)
    );
  }
  run() {
    const cache: any[] = this.to_data;
    for (const data of this.action_data) {
      cache.push(data);
    }
    _set(this.bag, this.to_key, cache);
    _unset(this.bag, this.path);
    return this.bag;
  }
}
