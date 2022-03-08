import { get as _get } from 'lodash';

import { BaseTarget } from './base.target';

export class VariableTarget extends BaseTarget<any> {
  convert(from_data: any) {
    const target_path = this.target_data.replace('{', '').replace('}', '');
    return _get(this.bag, target_path);
  }
}
