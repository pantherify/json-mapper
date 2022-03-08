import { get } from 'lodash';

import { BaseStep } from './base.step';
import { StepUtilities } from './utilities';

export class ObjectStep extends BaseStep {
  get_value() {
    const current_stack = this.stack[0];

    return get(this.prop, current_stack);
  }
  process() {
    const property = this.get_value();

    return this.next(property);
  }
  next(property: any): { output: any } {
    const next_stack = this.stack.slice(1);
    const next_step_class = StepUtilities.get_next_step(next_stack);

    if (!!next_step_class) {
      const next_step = new next_step_class(
        next_stack,
        this.bag,
        property,
        this.converter,
        this.target,
      );

      return next_step.process();
    }

    if (!!property) {
      const converter = new this.converter(this.target, this.bag);
      this.bag.output = converter.convert(property);
    } else {
      this.bag.output = null;
    }

    return this.bag;
  }
}
