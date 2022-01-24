import { NumberTarget } from './number.target';
import { ObjectTarget } from './object.target';
import { StringTarget } from './string.target';

export type TargetTypes =
    typeof NumberTarget |
    typeof StringTarget |
    typeof ObjectTarget;

export class TargetUtilities {

    public static get_target_class(target_data: any): TargetTypes {

        if (String(target_data).includes("number"))
            return NumberTarget;

        if (String(target_data).includes("string"))
            return StringTarget;

        if (!Array.isArray(target_data) &&
            typeof target_data === 'object')
            return ObjectTarget
    }
}