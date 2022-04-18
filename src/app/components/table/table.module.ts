import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { TableRoutingModule } from './table-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    TableRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ToolbarModule,
    ButtonModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [TableComponent],
  exports: [TableComponent],
})
export class TablesModule {}
