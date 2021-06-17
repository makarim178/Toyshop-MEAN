import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessangerServicesService {

  subject = new Subject();

  constructor() { }

  // tslint:disable-next-line:typedef
  sendMsg(product, opts) {
    // triggering an event
    const sendMsg = [];
    sendMsg.push(product);
    sendMsg.push(opts);


    this.subject.next(sendMsg);
  }

  // tslint:disable-next-line:typedef
  getMsg() {
    return this.subject.asObservable();
  }
}
