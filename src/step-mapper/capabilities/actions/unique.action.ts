import { BaseAction } from './base.action';


export class UniqueAction extends BaseAction {

    input_valid(): boolean {
        return Array.isArray(this.input_data)
    }

    run() {
        return this.input_data
            .filter((v, i, s) => s.indexOf(v) === i)
    }

}