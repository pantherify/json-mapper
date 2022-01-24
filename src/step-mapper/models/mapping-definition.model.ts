import { Mapping } from "./mapping.model";
import { Naming } from "./naming.model";

export class MappingDefinition {
    constructor(
        public namings: Naming,
        public mappings: Mapping) { }

    public static load_from_json(
        json_data: {
            namings?: Naming,
            mappings?: Mapping
        }
    ): MappingDefinition {
        return new MappingDefinition(
            json_data.namings,
            json_data.mappings
        )
    }
}