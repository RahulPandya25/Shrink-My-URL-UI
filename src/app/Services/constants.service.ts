import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  public static BASE_API_URL = "https://shrink-my-url-backend.herokuapp.com";

  constructor() { }
}
