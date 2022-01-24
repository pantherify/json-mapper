import { FlattenAction } from './flatten.action';
import { UniqueAction } from './unique.action';

export type ActionTypes =
    typeof FlattenAction |
    typeof UniqueAction

export class ActionUtilities {


    public static get_action_class(action): ActionTypes {
        switch (action) {
            case 'flatten': return FlattenAction
            case 'unique': return UniqueAction

            default: return null
        }
    }
}