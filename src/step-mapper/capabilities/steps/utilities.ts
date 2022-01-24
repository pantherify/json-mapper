import { ArrayStep } from './array.step';
import { ObjectStep } from './object.step';
import { StartStep } from './start.step';


export type StepTypes =
    typeof ArrayStep |
    typeof ObjectStep |
    typeof StartStep;

export class StepUtilities {

    public static get_next_step(stack: string[]): StepTypes {

        if (stack.length === 0) return null

        const next_step = stack[0]

        if (next_step.includes('[]')) return ArrayStep

        return ObjectStep

    }

}