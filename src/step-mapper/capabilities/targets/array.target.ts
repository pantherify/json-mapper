import { BaseTarget } from './base.target';
import { TargetUtilities } from './utilities';

export class ArrayTarget extends BaseTarget<any[]> {
  convert(from_data: any): any[] {
    const converter = TargetUtilities.get_target_class(this.target_data[0]);
    const result = [];

    for (const item of from_data) {
      result.push(new converter(this.target_data[0], this.bag).convert(item));
    }

    return result;
  }
}
