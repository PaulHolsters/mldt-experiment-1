import {NoValueType} from "../../../enums/NoValueTypes.enum";


export class TableColumnModel {
    constructor(public field:string,
                public header:string|NoValueType.NO_VALUE_NEEDED=NoValueType.NO_VALUE_NEEDED,
                public sort:NoValueType.CALCULATED_BY_ENGINE|NoValueType.NO_VALUE_NEEDED|Function = NoValueType.NO_VALUE_NEEDED,
                public filter:NoValueType.CALCULATED_BY_ENGINE|NoValueType.NO_VALUE_NEEDED|Function  = NoValueType.NO_VALUE_NEEDED) {
    }
}
