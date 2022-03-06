import { get } from 'lodash';

import { BaseStep } from './base.step';
import { StepUtilities } from './utilities';

export class StartStep extends BaseStep {
  get_value() {
    const current_stack = this.stack.shift();

    return get(this.prop, current_stack);
  }

  process() {
    const property = this.get_value();

    return this.next(property);
  }

  next(property: any) {
    const next_step_class = StepUtilities.get_next_step(this.stack);

    const next_step = new next_step_class(
      this.stack,
      this.bag,
      property,
      this.converter,
      this.target,
    );
    if (next_step) return next_step.process();

    throw new Error('Should Not start with Empty Object');
  }
}
