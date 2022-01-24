

export abstract class BaseTarget<T> {
    constructor(
        private target_data: any
    ) { }

    abstract convert(from_data: any): T
}