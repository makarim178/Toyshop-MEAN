import { SessionId } from 'src/app/models/sessionId/session-id';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// let apiUrl = '';
// addCartItem
// cartItems

@Injectable({
  providedIn: 'root'
})
export class CartServicesService {

  constructor(private http: HttpClient) { }

  getCart(): Observable<Product[]>{
    const key = 'id';
    const apiUrl = 'http://localhost:3000/cart/cartItems';
    const body = {sessionId: localStorage.getItem(key)}; // localStorage.getItem(key)};
    const headers = {'Content-Type': 'application/json'};
    // console.log(body);

    return this.http.post<Product[]>(apiUrl, body, { headers });

    // return this.http.post<Product[]>('http://localhost:3000/cart/cartItems');
  }

  addToCart(product: object): Observable<Product[]>{
    // console.log(product);
    const apiUrl = 'http://localhost:3000/cart/addCartItem';
    const body = product;
    const headers = {'Content-Type': 'application/json'};
    return this.http.post<Product[]>(apiUrl, body, { headers });
  }

  UpdateCart(product: object): Observable<Product[]>{
    const apiUrl = 'http://localhost:3000/cart/updateCart';
    const body = product;
    const headers = {'Content-Type': 'application/json'};
    // console.log('and the product to update is: ');
    // console.log(product);
    return this.http.put<Product[]>(`${apiUrl}`, body, { headers });
  }


  removeCarItem(prodId, sessionId): Observable<void>{
    const apiUrl = `http://localhost:3000/cart/removeCartItem/?id=${prodId}`;

    // console.log(product);

    // const body = {id: prodId, sessionId}; // {id: product.id, sessionId: product.sessionId};
    // const headers = {'Content-Type': 'application/json'};
    // console.log('and the product to delete is: ');
    // console.log(apiUrl);

    // console.log(product);
    return this.http.delete<void>(apiUrl);
  }
}
