import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  cols = {
    drivers: [
      {key: 'id', text: 'ID', type: "plain"},
      {key: 'name', text: 'Name', type: "text"},
      {key: 'email', text: 'Email', type: "email"},
      {key: 'phone', text: 'Phone', type: "number"},
      {key: 'city', text: 'City', type: "select",
      options: [
        {value: "la", text: "LA"},
        {value: "bp", text: "Budi"},
      ]},
      {key: 'address', text: 'Address', type: "text"}
    ],
    vehicles: [
      {key: "id", text: "#", type: "plain"},
      {key: "licensePlate", text: "KJG-678", type: "text"},
      {key: "year", text: "2015", type: "text"},
      {key: "manufacturer", text: "MG", type: "text"},
      {key: "consumption", text: "7", type: "text"},
      {key: "engine", text: "diesel", type: "text"}
    ],
    fuelings: [
      {key: "id", text: "1", type: "plain"},
      {key: "vehicle", text: "1", type: "text"},
      {key: "driver", text: "1", type: "text"},
      {key: "amount", text: "40", type: "text"},
      {key: "date", text: "2021-05-05", type: "text"}
    ]
  };

  constructor() {
  }
}
