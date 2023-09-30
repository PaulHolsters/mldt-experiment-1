import {ZeroValueType} from "../../../enums/zeroValueTypes.enum";
export class TableColumnModel {
    constructor(public field:string,public header:string|ZeroValueType.NotConfigured=ZeroValueType.NotConfigured) {
    }
}
