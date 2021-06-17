import { SingleProd } from './../../models/singleProd/single-prod';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MsgSingleProdService {
  subject = new Subject();

  constructor() { }

  // tslint:disable-next-line:typedef
  sendMsg(prod: SingleProd[]) {
    // const sendMsg: SingleProd[] = [];
    // sendMsg.push(prod);

    this.subject.next(prod);
  }

  getMsg() {
    // return this.subject.asObservable();
    return this.subject.asObservable();
  }
}
