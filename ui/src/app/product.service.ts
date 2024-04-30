import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { scheduled, asyncScheduler } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { MessageService } from './message.service';

import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //private productUrl = 'api/product';
  private productUrl = 'http://localhost:3000/product';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
      private http: HttpClient,
      private messageService: MessageService) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl).pipe(
        //tap(() => this.messageService.push('ProductService', 'info', 'fetched products')),
        catchError(this.handleError<Product[]>('getProducts', []))
    );
  }

  createProduct(product: Product): Observable<any> {
    return this.http.post(this.productUrl, product, this.httpOptions).pipe(
      //tap(() => this.messageService.push('ProductService', 'info', 'created product uuid=???')),
      catchError(this.handleError<any>('createProduct'))
    );
  }

  getProduct(uuid: string): Observable<Product> {
    return this.http.get<Product>(`${this.productUrl}/${uuid}`).pipe(
        //tap(() => this.messageService.push('ProductService', 'info', `fetched product uuid=${uuid}`)),
        catchError(this.handleError<Product>(`getProduct uuid=${uuid}`))
    );
  }

  updateProduct(product: Product): Observable<any> {
    return this.http.put(`${this.productUrl}/${product.uuid}`, product, this.httpOptions).pipe(
      //tap(() => this.messageService.push('ProductService', 'info', `updated product uuid=${product.uuid}`)),
      catchError(this.handleError<any>(`updateProduct uuid=${product.uuid}`))
    );
  }

  deleteProduct(product: Product): Observable<any> {
    return this.http.delete(`${this.productUrl}/${product.uuid}`).pipe(
      //tap(() => this.messageService.push('ProductService', 'info', `deleted product uuid=${product.uuid}`)),
      catchError(this.handleError<any>(`deleteProduct uuid=${product.uuid}`))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    //const serviceName = this.constructor.name;
    const serviceName: string = 'ProductService';

    return (error: any): Observable<T> => {
      // log to console
      console.error(error);

      // log to message service
      this.messageService.push(serviceName, 'error',
          `${operation} failed: ${error.message}`);

      // let the app keep running by returning an empty result
      return scheduled([result as T], asyncScheduler);
    };
  }

}
