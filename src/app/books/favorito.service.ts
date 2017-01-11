import { Injectable } from '@angular/core';

@Injectable()
export class FavoritoService {
    name = "_f";

    private favoritos = [];

    constructor() { }

    listar(){
        if(!this.favoritos || this.favoritos.length == 0){
            let lista = localStorage.getItem(this.name);
            this.favoritos = lista?JSON.parse(lista):[];
        }        
        return this.favoritos;
    }

    removeFavorito(book){
        if(this.isFavorito(book.id)){
            if(this.favoritos){
                var index = this.favoritos.findIndex(element => element.id == book.id ); 
                if(index > -1){
                    this.favoritos.splice(index, 1);
                }                
                let listaJSON = this.favoritos? JSON.stringify(this.favoritos): null;
                localStorage[this.name] = listaJSON;
            }
            
        }
    }

    setFavorito(book){
        if(!this.isFavorito(book.id)){
            this.favoritos.push(book);
            localStorage[this.name] = JSON.stringify(this.favoritos);
        }
    }

    isFavorito(id :String){
        let books = this.getFavorito(id);

        return books != null && books.length > 0 ? true : false;        
    }

    getFavorito(id :String){
        return this.listar().filter(element => {
            return element.id == id;
        });
    }
}