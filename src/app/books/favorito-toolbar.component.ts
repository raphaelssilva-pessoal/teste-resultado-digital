import { Component, OnInit } from '@angular/core';

import {FavoritoService} from './favorito.service';

@Component({
    selector: 'favorito-toolbar',
    templateUrl: './favorito-toolbar.component.html'
})
export class FavoritoToolbarComponent implements OnInit {
    constructor(private service : FavoritoService) { }

    favoritos = [];

    ngOnInit() { }

    listarFavoritos(){
        this.favoritos = this.service.listar();
    }
}