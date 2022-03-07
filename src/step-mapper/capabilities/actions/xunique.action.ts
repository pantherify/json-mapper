import { BaseAction } from './base.action';

export class XUniqueAction extends BaseAction {
  input_valid(): boolean {
    return Array.isArray(this.to_data);
  }

  run() {
    this.to_data = this.to_data.filter((v, i, s) => s.indexOf(v) === i);
    return this.bag;
  }
}
