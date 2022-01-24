import { BaseTarget } from './base.target';


export class NumberTarget extends BaseTarget<Number>{

    convert(from_data: any): Number {
        throw new Error('Method not implemented.');
    }
}