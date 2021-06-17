import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subcategories } from 'src/app/models/subcategories/subcategories';
import { Observable } from 'rxjs';

const apiUrl = 'http://localhost:3000/subcategories';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriesService {

  constructor(private http: HttpClient) { }

  getSubCategories(): Observable<Subcategories[]>{
    return this.http.get<Subcategories[]>(apiUrl);
  }
}
