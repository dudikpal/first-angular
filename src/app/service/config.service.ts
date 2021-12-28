import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  cols = {
    drivers: [
      {key: 'id', text: '#'},
      {key: 'name', text: 'Name'},
      {key: 'email', text: 'Email'},
      {key: 'phone', text: 'Phone'},
      {key: 'city', text: 'City'},
      {key: 'address', text: 'Address'}
    ],
    vehicles: [
      {key: "id", text: "#"},
      {key: "licensePlate", text: "KJG-678"},
      {key: "year", text: "2015"},
      {key: "manufacturer", text: "MG"},
      {key: "consumption", text: "7"},
      {key: "engine", text: "diesel"}
    ],
    fuelings: [
      {key: "id", text: "1"},
      {key: "vehicle", text: "1"},
      {key: "driver", text: "1"},
      {key: "amount", text: "40"},
      {key: "date", text: "2021-05-05"}
    ]
  };

  constructor() {
  }
}
