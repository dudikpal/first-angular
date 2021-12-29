import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class BaseService {

  serverUrl: string = "http://localhost:3000/"

  data: any = {
    drivers: [
      {
        id: 1,
        name: 'John Doe',
        email: 'emil@emil.fg',
        phone: 36555654,
        city: "bp",
        address: 'kon str. 3.'
      },
      {
        id: 2,
        name: '2John Doe',
        email: '2emil@emil.fg',
        phone: 36555-654,
        city: 'la',
        address: '2kon str. 3.'
      }
    ],
    vehicles: [
      {
        id: 1,
        licensePlate: 'KJG-678',
        year: '2015',
        manufacturer: 'MG',
        consumption: '7',
        engine: 'diesel'
      }
    ],
    fuelings: [
      {
        id: 1,
        vehicle: 1,
        driver: 1,
        amount: '40',
        date: '2021-05-05'
      }
    ]
  };


  constructor(
    private http: HttpClient
  ) {
  }


  getAll(dataType: string): Observable<any> {
    let url = `${this.serverUrl}${dataType}`;
    console.log(url)
    return this.http.get(url);
  }
}
