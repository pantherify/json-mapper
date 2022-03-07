import { BaseAction } from './base.action';

export class FlattenAction extends BaseAction {
  input_valid(): boolean {
    if (!Array.isArray(this.target_data)) return false;

    return this.target_data.every((a) => Array.isArray(a));
  }

  run(): any {
    this.target_data = this.target_data.flat();
    return this.input_data;
  }
}
