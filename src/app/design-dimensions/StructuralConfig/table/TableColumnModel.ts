import {DeterminedByEngine, NotConfigured} from "../../../types/type-aliases";

export class TableColumnModel {
    constructor(public field:string,
                public header:string|NotConfigured=undefined,
                public sort:DeterminedByEngine|NotConfigured|Function = undefined,
                public filter:DeterminedByEngine|NotConfigured|Function = undefined) {
    }
}
