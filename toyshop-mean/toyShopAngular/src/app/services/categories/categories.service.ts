import { Injectable } from '@angular/core';
import { Categories } from 'src/app/models/categories/categories';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const apiUrl = 'http://localhost:3000/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) {  }

  getCategories(): Observable<Categories[]>{
    return this.http.get<Categories[]>(apiUrl);
  }
}
