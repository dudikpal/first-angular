import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-cell',
  templateUrl: './data-cell.component.html',
  styleUrls: ['./data-cell.component.css']
})
export class DataCellComponent implements OnInit {

  @Input() row!: any;
  @Input() col!: any;


  constructor() { }

  ngOnInit(): void {
  }

}
