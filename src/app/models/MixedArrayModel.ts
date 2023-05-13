import {StatePropertySubjectModel} from "./StatePropertySubject";
import {CalculationModel} from "./CalculationModel";

export interface MixedArrayModel
  extends Array<
    unknown|
    string|
    number|
    boolean|
    StatePropertySubjectModel|
    CalculationModel
  > {
}
