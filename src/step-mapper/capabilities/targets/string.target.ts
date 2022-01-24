import { BaseTarget } from './base.target';



export class StringTarget extends BaseTarget<string> {

    convert(from_data: any): string {
        throw new Error("Method not implemented.");
    }

}