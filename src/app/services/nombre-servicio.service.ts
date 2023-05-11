import { ICurrency } from './../interfaces/currency.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private urlApi= 'https://us-central1.gcp.data.mongodb-api.com/app/mtwdm-drwqq/endpoint/unit/converter';

constructor(private http: HttpClient) {}

public getData(): Promise<ICurrency[]>{
  return fetch(this.urlApi).then(response => response.json())
  .catch(error => {
    console.log(error);
    throw error;
  })
}





}
