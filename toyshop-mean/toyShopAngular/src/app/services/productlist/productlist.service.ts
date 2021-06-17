import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

let apiUrl = 'http://localhost:3000/products';
// const apiUrl = 'http://localhost:3000/products/prodById';

@Injectable({
  providedIn: 'root'
})

export class ProductlistService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    // const headers = {'Content-Type': 'application/json'};
    // const body = {id: '5f23a7c01bfe3d6590a37909'};

    // this.http.get('http://localhost:63203/api/CallCenter/GetSupport', { headers: headers, search: params })

    // return this.http.post<any>(apiUrl, body, { headers });
    apiUrl = 'http://localhost:3000/products';
    return this.http.get<Product[]>(apiUrl);
  }

  getProductsById(id): Observable<Product[]>{
    const headers = {'Content-Type': 'application/json'};
    const body = {id};
    apiUrl = 'http://localhost:3000/products/prodById';

    return this.http.post<Product[]>(apiUrl, body, { headers });
  }
}
