import { FlattenAction } from './flatten.action';
import { MergeAction } from './merge.action';
import { NormalizeAction } from './normalize.action';
import { NotNullAction } from './not_null.action';
import { PrintAction } from './print.action';
import { RenameAction } from './rename.action';
import { UnflattenAction } from './unflatten.action';
import { UniqueAction } from './unique.action';
import { XUniqueAction } from './xunique.action';

export type ActionTypes =
  | typeof FlattenAction
  | typeof UniqueAction
  | typeof XUniqueAction
  | typeof PrintAction
  | typeof NotNullAction
  | typeof UnflattenAction
  | typeof NormalizeAction
  | typeof RenameAction
  | typeof MergeAction;

export class ActionUtilities {
  public static get_action_class(action: string): ActionTypes {
    switch (action) {
      case 'flatten':
        return FlattenAction;
      case 'unique':
        return UniqueAction;
      case 'not-null':
        return NotNullAction;
      case 'unflatten':
        return UnflattenAction;
    }

    if (/merge:/.test(action)) return MergeAction;
    if (/xunique:/.test(action)) return XUniqueAction;
    if (/normalize:/.test(action)) return NormalizeAction;
    if (/rename:/.test(action)) return RenameAction;
    if (/print/.test(action)) return PrintAction;

    return null;
  }
}
