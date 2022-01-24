import { BaseTarget } from './base.target';



export class StringTarget extends BaseTarget<string> {

    convert(from_data: any): string {
        return String(from_data)
    }

}