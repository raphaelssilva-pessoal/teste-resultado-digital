import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';


import { GoogleBooksService} from './books.service';
import { FavoritoService} from './favorito.service';

@Component({
    selector: 'book',
    templateUrl: './book.component.html'
})
export class BookComponent implements OnInit {
    constructor(
        private booksService : GoogleBooksService, 
        private favoritoService : FavoritoService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    book;
    favorito : boolean;

    ngOnInit() { 
        this.route.params        
        .subscribe((params: Params) => this.getBook(params['id']));
    }

    getBook(id : string){
        this.booksService.get(id)
        .subscribe(book => this.book = book);
    }
}