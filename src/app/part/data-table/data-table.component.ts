import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BaseService} from "../../service/base.service";

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  @Input() list!: any[];
  @Input() cols!: any[];
  @Input() phraseString!: string;

  @Output() create: EventEmitter<any> = new EventEmitter<any>();
  @Output() update: EventEmitter<any> = new EventEmitter<any>();
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();

  phraseKey: string = 'notset';
  newRow: any = {};


  constructor(
    private baseService: BaseService
  ) {
  }

  ngOnInit() {

  }

  onCreate(row): void {
    this.create.emit(row);
  }

  onUpdate(row): void {
    this.update.emit(row);
  }

  onDelete(row): void {
    if (confirm('Are you sure?')) {
      this.delete.emit(row)
    }
  }


}
