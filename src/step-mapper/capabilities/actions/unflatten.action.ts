import { BaseAction } from './base.action';

export class UnflattenAction extends BaseAction {
  input_valid(): boolean {
    return true;
  }
  run() {
    this.action_data = [this.action_data];
    return this.bag;
  }
}
