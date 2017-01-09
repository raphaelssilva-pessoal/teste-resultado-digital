import { Injectable } from '@angular/core';

@Injectable()
export class FavoritoService {
    name = "_f";

    constructor() { }

    listar(){
        let lista = localStorage.getItem(this.name);
        return lista?JSON.parse(lista):[];
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
        return this.getFavorito(id)?true:false;
    }

    getFavorito(id :String){
        return this.listar().filter(element => {
            element.id == id;
        });
    }
}