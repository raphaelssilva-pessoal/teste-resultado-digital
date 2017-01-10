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
        this.total = this.total?this.total:10;
        this.q = q;
        this.find();
    }

    private find(){
        this.googleBooksService.find(this.q, this.pagina*this.total, this.total).subscribe(
            books => {
                this.books = books;
            }
        );
    }

    favoritar(book){
        if(this.isFavorito(book)){
            this.favoritoService.removeFavorito(book);
        }else{            
            this.favoritoService.setFavorito(book);
        }
        
    }

    isFavorito(book){
        return this.favoritoService.isFavorito(book.id);
    }

    getPages(pageAtual, totalPorPage, length){
        let pages = [];
        for(let i = 0; i < length; i++){
            if((i+1)%totalPorPage==0){
                let page = {};
                page["numero"] = Math.floor((i+1)/totalPorPage);
                page["start"] = (i+1);
                pages.push(page);
            }
        }
        return pages;
    }

}