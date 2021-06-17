import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionId } from 'src/app/models/sessionId/session-id';

const apiUrl = 'http://localhost:3000/uuid';

@Injectable({
  providedIn: 'root'
})
export class SessionIdService {

  constructor(private http: HttpClient) { }

  getSessionId(): Observable<any>{
    return this.http.get<any>(apiUrl);
  }
}
