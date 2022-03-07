import { BaseAction } from './base.action';

export class NotNullAction extends BaseAction {
  input_valid(): boolean {
    return Array.isArray(this.action_data);
  }
  run() {
    this.action_data = this.action_data.filter((a) => a != null);
    return this.bag;
  }
}
