import { NgModule } from '@angular/core';

import { BooksComponent }   from './books.component';
import { GoogleBooksService }   from './books.service';
import {FavoritoService} from './favorito.service';
import {FavoritoToolbarComponent} from './favorito-toolbar.component';
import {BookComponent} from './book.component';


@NgModule({
    imports: [],
    exports: [],
    declarations: [
        BooksComponent, 
        FavoritoToolbarComponent,
        BookComponent,
    ],
    providers: [GoogleBooksService, FavoritoService],
})
export class BooksModule { }
