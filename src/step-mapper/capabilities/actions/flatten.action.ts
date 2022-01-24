import { BaseAction } from './base.action';


export class FlattenAction extends BaseAction {

    input_valid(): boolean {
        if (!Array.isArray(this.input_data)) return false

        return this.input_data.every((a) => Array.isArray(a))
    }

    run(): any {
        return this.input_data.flat()
    }

}