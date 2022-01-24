import { TargetTypes } from '../targets/utilities';


export abstract class BaseStep {

    constructor(
        protected stack: string[],
        protected bag: any = {},
        protected prop: any,
        protected converter: TargetTypes,
        protected target: any
    ) { }

    abstract get_value(): any;

    abstract process(): any;

    abstract next(property: any): any;

}