export interface LayoutStateModel {
  // todo maak van de configuratie mogelijkheden enums ipv strings
  // container props
  row?: boolean|undefined
  column?: boolean|undefined
  wrap?: boolean|undefined
  justifyContentStart? : boolean|undefined
  alignItemsStart? : boolean|undefined
  alignContentStart? : boolean|undefined
  justifyContentCenter? : boolean|undefined
  alignItemsCenter? : boolean|undefined
  alignContentCenter? : boolean|undefined
  justifyContentEnd? : boolean|undefined
  alignItemsEnd? : boolean|undefined
  alignContentEnd? : boolean|undefined
  alignContentBetween? : boolean|undefined
  alignContentEvenly? : boolean|undefined
  alignContentAround? : boolean|undefined
  justifyContentBetween? : boolean|undefined
  justifyContentEvenly? : boolean|undefined
  justifyContentAround? : boolean|undefined
  overflowHidden? : boolean|undefined
  overflowXHidden? : boolean|undefined
  overflowYHidden? : boolean|undefined
  overflowAuto? : boolean|undefined
  overflowXAuto? : boolean|undefined
  overflowYAuto? : boolean|undefined

  // child props
  height?: string|undefined
  width?: string|undefined
  // shrink, grow, ... todo
}
