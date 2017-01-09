import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { BooksModule } from './books/books.module';

import { MaterializeModule } from 'angular2-materialize';

import { ROUTER_ROOT } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MaterializeModule,
    BooksModule,
    ROUTER_ROOT
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
