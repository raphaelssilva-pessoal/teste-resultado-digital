import { NgModule } from '@angular/core';

import { BooksComponent }   from './books.component';
import { GoogleBooksService }   from './books.service';
import {FavoritoService} from './favorito.service';
import {FavoritoToolbarComponent} from './favorito-toolbar.component';
import {BookComponent} from './book.component';
import { BrowserModule }  from '@angular/platform-browser';


@NgModule({
    imports: [BrowserModule],
    exports: [FavoritoToolbarComponent],
    declarations: [
        BooksComponent, 
        FavoritoToolbarComponent,
        BookComponent,
    ],
    providers: [GoogleBooksService, FavoritoService],
})
export class BooksModule { }
