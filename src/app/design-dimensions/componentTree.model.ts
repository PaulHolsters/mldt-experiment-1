export interface ComponentTreeModel {
  parent:string,
  children?:(string|ComponentTreeModel)[]
}
