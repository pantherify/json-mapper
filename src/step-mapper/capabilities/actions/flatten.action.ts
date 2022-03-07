import { BaseAction } from './base.action';

export class FlattenAction extends BaseAction {
  input_valid(): boolean {
    if (!Array.isArray(this.action_data)) return false;

    return this.action_data.every((a) => Array.isArray(a));
  }

  run(): any {
    this.action_data = this.action_data.flat();
    return this.bag;
  }
}
