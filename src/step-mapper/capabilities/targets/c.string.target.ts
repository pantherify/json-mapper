import { BaseTarget } from './base.target';
import { StringTarget } from './string.target';

export class CStringTarget extends BaseTarget<String> {
  convert(from_data: any): String {
    const data = this.target_data.replace('$', '');
    return new StringTarget(this.target_data, this.bag).convert(data);
  }
}
