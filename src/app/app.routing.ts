import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksComponent } from './books/books.component';
import { BookComponent } from './books/book.component';

const routes: Routes = [
  { path: '', component: BooksComponent },
  { path: 'book/:id', component: BookComponent },
];

export const ROUTER_ROOT = RouterModule.forRoot(routes);
