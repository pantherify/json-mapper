import { BaseTarget } from './base.target';


export class NumberTarget extends BaseTarget<Number>{

    convert(from_data: any): Number {
        return Number(from_data)
    }
}