import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {
  errorMessage :string;
  errorBoolean :boolean;
  userId:any;
  constructor() { }
}
