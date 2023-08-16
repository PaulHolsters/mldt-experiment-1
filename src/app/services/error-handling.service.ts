import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {

  constructor() { }
  public handle(error:Error){
    throw error
  }
}
