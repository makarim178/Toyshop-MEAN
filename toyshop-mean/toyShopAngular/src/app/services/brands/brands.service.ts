import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brands } from 'src/app/models/brands/brands';
import { Observable } from 'rxjs';

const apiUrl = 'http://localhost:3000/brands';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private http: HttpClient) { }

  getBrands(): Observable<Brands[]>{
    return this.http.get<Brands[]>(apiUrl);
  }
}
