import { NamingProp } from "./naming-prop.model";

export interface Naming {
    [model: string]: NamingProp;
}