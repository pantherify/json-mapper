import { BaseTarget } from './base.target';

export class FullObject extends BaseTarget<Object> {
  convert(from_data: any): Object {
    return from_data;
  }
}
