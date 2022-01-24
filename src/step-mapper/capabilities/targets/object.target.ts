import { BaseTarget } from './base.target';
import { TargetUtilities } from './utilities';


export class ObjectTarget extends BaseTarget<any> {

    convert(from_data: any) {

        const target_keys = Object.keys(this.target_data)
        const result = {}
        for (const key of target_keys) {
            const converter = TargetUtilities.get_target_class(this.target_data[key])
            const out = (new converter(this.target_data[key])).convert(from_data[key])
            result[key] = out
        }

        return result
    }

}