import { BaseStep } from './base.step';


export class StartStep extends BaseStep {

    get_value() {

        const current_stack = this.stack.shift()

        return this.prop[current_stack]
    }

    process() {

        const property = this.get_value()

        return this.next(property)
    }
    next(property: any) {

        const new_stack = this.stack

        console.log(new_stack)

    }

}