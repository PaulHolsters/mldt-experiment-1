import {CurrencyType} from "../../../enums/currencyType.enum";
import {CurrencyDisplayType} from "../../../enums/currencyDisplayType.enum";

export class CurrencyModel {
    constructor(public currency: CurrencyType,
                public currencyDisplay: CurrencyDisplayType) {
    }
}
