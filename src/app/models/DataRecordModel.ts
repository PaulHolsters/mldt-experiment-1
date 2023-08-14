export interface DataRecordModel extends Object {
  // todo eigenlijk is dit simpelweg je blueprint object dat van de server komt
  //      maw hoe kan ik blueprint gebruiken zodat ik hier betere typechecking kan realiseren?
  id:string,
  __typename:string
}
