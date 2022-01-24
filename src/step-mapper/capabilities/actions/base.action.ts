

export abstract class BaseAction {
    constructor(
        protected input_data: any
    ) { }

    abstract input_valid(): boolean

    abstract run(): any
}