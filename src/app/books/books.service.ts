import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import 'rxjs/Rx';

interface Book{

}

@Injectable()
export class GoogleBooksService {

    urlBase = "https://www.googleapis.com/books/v1/volumes";

     constructor (private http: Http) {}

     find(q : string, startIndex, maxResults){
         let params = {}, options = {};
         params['q'] = q;
         params['startIndex'] = startIndex;
         params['maxResults'] = maxResults;

         options['params'] = params;
         return  this.http.get(this.urlBase, options)
         .map(this.extrairDados)
         .catch(this.handleError);
     }

     get(id : string){
         let url = this.urlBase + "/" + id;
         return this.http.get(url)
         .map(this.extrairDados)
         .catch(this.handleError);
     }

     private extrairDados(res: Response) {
        let body = res.json();     
        
        return body.data || { };
    }

    private formatBook(elemento){
        let book = {};

        book['id'] = elemento.id;
        //book['titulo'] = elemento.

        return book;
    }

     private handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);      
        return  error;
    }

}