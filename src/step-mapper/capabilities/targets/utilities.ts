import { ArrayTarget } from './array.target';
import { FullObject } from './full-object.target';
import { NumberTarget } from './number.target';
import { ObjectTarget } from './object.target';
import { StringTarget } from './string.target';

export type TargetTypes =
  | typeof NumberTarget
  | typeof StringTarget
  | typeof ObjectTarget
  | typeof ArrayTarget
  | typeof FullObject;

export class TargetUtilities {
  public static get_target_class(target_data: any): TargetTypes {
    let innerType = null;

    if (String(target_data).includes('number')) innerType = NumberTarget;

    if (String(target_data).includes('float')) innerType = NumberTarget;

    if (String(target_data).includes('string')) innerType = StringTarget;

    if (String(target_data).includes('object')) innerType = FullObject;

    if (typeof target_data === 'object') innerType = ObjectTarget;

    // Validate Top Levels
    if (!Array.isArray(target_data)) return innerType;

    return ArrayTarget;
  }
}
