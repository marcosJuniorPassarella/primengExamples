import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsComponent } from './forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsRoutingModule } from './forms-routing.module';

@NgModule({
  declarations: [FormsComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    FormsRoutingModule,
  ],
  providers: [],
  bootstrap: [FormsComponent],
  exports: [FormsComponent],
})
export class FormsModule {}
