import { BaseStep } from './base.step';
import { StepUtilities } from './utilities';


export class ArrayStep extends BaseStep {

    get_value() {
        const current_stack = this.stack[0].replace('[]', '')

        return this.prop[current_stack]
    }
    process() {

        const result = []

        for (const item of this.get_value()) {
            result.push(this.next(item).output)
        }

        return { output: result }
    }
    next(property: any): { output: any } {

        const next_stack = this.stack.slice(1)
        const next_step_class = StepUtilities.get_next_step(next_stack)

        if (!!next_step_class) {
            const next_step = new next_step_class(
                next_stack,
                this.bag,
                property,
                this.converter,
                this.target
            )

            return next_step.process()
        }

        const converter = new this.converter(this.target)
        this.bag.output = converter.convert(property)

        return this.bag
    }

}