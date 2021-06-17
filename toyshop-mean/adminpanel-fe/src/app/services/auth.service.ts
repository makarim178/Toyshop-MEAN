import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authToken: any;
  user: any;

  constructor(private http: HttpClient, private router: Router) { }

  registerUser(user): Observable<any> {
    const headers = {'Content-Type': 'application/json'};
    return this.http.post('http://localhost:3000/adminUsers/register', user, { headers });
  }

  authenticateUser(user): Observable<any> {
    const headers = {'Content-Type': 'application/json'};

    return this.http.post('http://localhost:3000/adminUsers/authenticate', user, { headers });
  }

  // tslint:disable-next-line:typedef
  logOutUser(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  // tslint:disable-next-line:variable-name
  storeUserData(id_token: string, user: any): void {
    localStorage.clear();
    localStorage.setItem('id_token', id_token);
    localStorage.setItem('user', JSON.stringify(user));
  }

}
