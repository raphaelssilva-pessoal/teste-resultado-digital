import { Injectable } from '@angular/core';

@Injectable()
export class FavoritoService {
    name = "_f";

    constructor() { }

    listar(){
        let lista = localStorage.getItem(this.name);
        return lista?JSON.parse(lista):[];
    }

    removeFavorito(book){
        if(this.isFavorito(book.id)){
            let lista = localStorage.getItem(this.name);
            if(lista){
                let listaArray = JSON.parse(lista);
                listaArray = this.listar().filter(element => {
                    return element.id != book.id;
                });

                let listaJSON = listaArray? JSON.stringify(listaArray): null;
                localStorage[this.name] = listaJSON;
            }
            
        }
    }

    setFavorito(book){
        if(!this.isFavorito(book.id)){
            let lista = localStorage.getItem(this.name);
            let listaArray = [];
            if(!lista){
                listaArray = [];
            }else{
                listaArray = JSON.parse(lista);
            }

            listaArray.push(book);

            localStorage[this.name] = JSON.stringify(listaArray);
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