import {Component, Input, OnInit} from '@angular/core';
import {BaseService} from "../../service/base.service";

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  @Input() list!: any[];
  @Input() cols!: any[];

  constructor(
    private baseService: BaseService
  ) {
  }

  ngOnInit() {

  }

  onUpdate(event: string): void {
    alert('Update');
  }

  onDelete(event: string): void {
    alert(`Click on ${event} button`);
  }

}
