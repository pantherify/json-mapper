import { BaseTarget } from './base.target';
import { NumberTarget } from './number.target';

export class CNumberTarget extends BaseTarget<Number> {
  convert(from_data: any): Number {
    const data = this.target_data.replace('#', '');
    return new NumberTarget(this.target_data, this.bag).convert(data);
  }
}
