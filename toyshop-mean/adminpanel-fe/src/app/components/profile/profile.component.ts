import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(JSON.parse(localStorage.getItem('user')));
    this.user.push(JSON.parse(localStorage.getItem('user')));
  }

}
