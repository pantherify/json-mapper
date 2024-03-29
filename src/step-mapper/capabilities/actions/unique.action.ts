import { BaseAction } from './base.action';

export class UniqueAction extends BaseAction {
  input_valid(): boolean {
    return Array.isArray(this.action_data);
  }

  run() {
    this.action_data = this.action_data.filter((v, i, s) => s.indexOf(v) === i);
    return this.bag;
  }
}
