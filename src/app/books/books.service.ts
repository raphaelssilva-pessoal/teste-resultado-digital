import { Injectable } from '@angular/core';

import { Http, Response, URLSearchParams, QueryEncoder } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class GoogleBooksService {

    urlBase = "https://www.googleapis.com/books/v1/volumes";

    constructor(private http: Http) { }

    find(q: string, startIndex, maxResults) {
        let params = new URLSearchParams(), options = {};
        params.set('q', q);
        params.set('startIndex', startIndex);
        params.set('maxResults', maxResults);

        options['search'] = params;
        return this.http.get(this.urlBase, options)
            .map(this.sucess)            
            .catch(this.handleError);
    }

    

    get(id: string) {
        let url = this.urlBase + "/" + id;
        return this.http.get(url)
            .map(this.sucess)
            .catch(this.handleError);
    }

    private sucess(res: Response) {
        let body = res.json();

        return body || {};
    }

    private sucessBusca(dados) {

    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return error;
    }

}