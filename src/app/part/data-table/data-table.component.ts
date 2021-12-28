import { Component, OnInit } from '@angular/core';
import {BaseService} from "../../service/base.service";

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

  driver: any = {};

  constructor(
    private baseService: BaseService
  ) {
  }

  ngOnInit(): void {
    this.driver = this.baseService.getAll('drivers')[0];
  }

  onUpdate(event: string): void {
    alert('Update');
  }

  onDelete(event: string): void {
    alert(`Click on ${event} button`);
  }

}
