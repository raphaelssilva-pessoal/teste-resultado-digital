import { Component, OnInit } from '@angular/core';

import { GoogleBooksService} from "./books.service";

import { FavoritoService} from "./favorito.service";

@Component({
    selector: 'books',
    templateUrl: './books.component.html'
})
export class BooksComponent implements OnInit {
    constructor(private googleBooksService: GoogleBooksService, private favoritoService: FavoritoService) { }
    q;
    books;
    pagina;
    total;

    ngOnInit(){} 

    search(q){
        this.pagina = 0;
        this.q = q;
        this.find();
    }

    private find(){
        this.googleBooksService.find(this.q, this.pagina*this.total, this.total).subscribe(
            books => this.books = books
        );
    }

    favoritar(book){
        this.favoritoService.setFavorito(book);
    }

    isFavorito(book){
        return this.favoritoService.isFavorito(book.id);
    }

}