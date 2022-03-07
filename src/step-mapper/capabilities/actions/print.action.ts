import { BaseAction } from './base.action';

export class PrintAction extends BaseAction {
  input_valid(): boolean {
    return true;
  }
  run() {
    console.log('########## INIT PRINT ############');
    console.dir('Bag', this.bag);
    console.dir('Action', this.action);
    console.dir('Action_Data', this.action_data);
    try {
      console.dir('To_Data', this.to_data);
    } catch (error) {}

    console.log('########## END PRINT ############');
    return this.bag;
  }
}
