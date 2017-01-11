import {ViewChild, ElementRef, Component, OnInit, AfterViewInit } from '@angular/core';

import {FavoritoService} from './favorito.service';

declare  var $:any;

@Component({
    selector: 'favorito-toolbar',
    templateUrl: './favorito-toolbar.component.html'
})
export class FavoritoToolbarComponent implements OnInit, AfterViewInit  {
    @ViewChild('selectElem') el:ElementRef;

    constructor(private favoritoService : FavoritoService) { }

    favoritos = [];

     ngAfterViewInit() {
         $(this.el.nativeElement).sideNav({
            menuWidth: 300, // Default is 240
            edge: 'right', // Choose the horizontal origin
            closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
            draggable: true // Choose whether you can drag to open on touch screens
        });
     }

    ngOnInit() { 
        this.listarFavoritos();        
    }

    listarFavoritos(){
        this.favoritos = this.favoritoService.listar();
    }
}