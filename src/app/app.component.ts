import {Component, OnDestroy, OnInit} from '@angular/core';
import {BaseService} from "./service/base.service";
import {ConfigService} from "./service/config.service";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'portfolio-page-angular';
  driver: any = {};
  cols: any[] = [];
  listSubscription!: Subscription;

  constructor(
    private baseService: BaseService,
    private config: ConfigService
  ) {
  }

  ngOnInit() {
    this.cols = this.config.cols.drivers;
    this.listSubscription = this.baseService.getAll('drivers')
      .subscribe(
        list => {this.driver = list},
        err => console.error(err),
        () => console.log('unsubscribed')
      );
  }

  ngOnDestroy() {
    this.listSubscription.unsubscribe();
  }

  onCreate(row: any): void {
    this.baseService.create('drivers', row);
  }

  onUpdate(row: any): void {
    this.baseService.update('drivers', row);
  }

  onDelete(row: any): void {
    this.baseService.delete('drivers', row);
  }

}
