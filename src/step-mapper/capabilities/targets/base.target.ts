

export abstract class BaseTarget<T> {
    constructor(
        protected target_data: any
    ) { }

    abstract convert(from_data: any): T
}