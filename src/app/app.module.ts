import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { MenuComponent } from './part/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTableComponent } from './part/data-table/data-table.component';
import { DataRowComponent } from './part/data-row/data-row.component';
import { DataCellComponent } from './part/data-cell/data-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DataTableComponent,
    DataRowComponent,
    DataCellComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
