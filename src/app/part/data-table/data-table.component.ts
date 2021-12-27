import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  cols: {key: string, text: string}[] = [
    {key: 'id', text: '#'},
    {key: 'name', text: 'Name'},
    {key: 'email', text: 'Email'},
    {key: 'phone', text: 'Phone'},
    {key: 'city', text: 'City'},
    {key: 'address', text: 'Address'}
  ];

  driver: any = {
    id: 1,
    name: 'John Doe',
    email: 'emil@emil.fg',
    phone: '+36555-654',
    city: 'Lorien',
    address: 'kon str. 3.'
  };

  deleteIconClass: string = 'fa fa-trash';

  constructor() {
    setInterval(() => {
      if (this.deleteIconClass == 'fa fa-trash') {
        this.deleteIconClass = 'fa fa-trash-o';
      } else {
        this.deleteIconClass = 'fa fa-trash';
      }
    }, 1000);
  }

  ngOnInit(): void {
  }

  onUpdate(event: string): void {
    alert('Update');
  }

  onDelete(event: string): void {
    alert(`Click on ${event} button`);
  }

}
