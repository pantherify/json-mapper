import { BaseAction } from './base.action';

export class UniqueAction extends BaseAction {
  input_valid(): boolean {
    return Array.isArray(this.target_data);
  }

  run() {
    this.target_data = this.target_data.filter((v, i, s) => s.indexOf(v) === i);
    return this.input_data;
  }
}
