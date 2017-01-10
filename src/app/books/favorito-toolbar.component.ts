import { Component, OnInit } from '@angular/core';

import {FavoritoService} from './favorito.service';

@Component({
    selector: 'favorito-toolbar',
    templateUrl: './favorito-toolbar.component.html'
})
export class FavoritoToolbarComponent implements OnInit {
    constructor(private favoritoService : FavoritoService) { }

    favoritos = [];

    ngOnInit() { 
        this.listarFavoritos();
    }

    listarFavoritos(){
        this.favoritos = this.favoritoService.listar();
    }
}