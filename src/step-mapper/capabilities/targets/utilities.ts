import { ArrayTarget } from './array.target';
import { CNumberTarget } from './c.number.target';
import { CStringTarget } from './c.string.target';
import { FullObject } from './full-object.target';
import { NumberTarget } from './number.target';
import { ObjectTarget } from './object.target';
import { StringTarget } from './string.target';
import { VariableTarget } from './variable.target';

export type TargetTypes =
  | typeof NumberTarget
  | typeof StringTarget
  | typeof ObjectTarget
  | typeof ArrayTarget
  | typeof CStringTarget
  | typeof CNumberTarget
  | typeof VariableTarget
  | typeof FullObject;

export class TargetUtilities {
  public static get_target_class(target_data: any): TargetTypes {
    let innerType = null;

    if (String(target_data).includes('number')) innerType = NumberTarget;
    if (String(target_data).includes('float')) innerType = NumberTarget;
    if (String(target_data).includes('string')) innerType = StringTarget;
    if (String(target_data).includes('object')) innerType = FullObject;

    if (String(target_data).includes('$')) innerType = CStringTarget;
    if (String(target_data).includes('#')) innerType = CNumberTarget;

    if (/\{.+\}/.test(target_data)) innerType = VariableTarget;

    if (typeof target_data === 'object') innerType = ObjectTarget;

    // Validate Top Levels
    if (!Array.isArray(target_data)) return innerType;

    return ArrayTarget;
  }
}
