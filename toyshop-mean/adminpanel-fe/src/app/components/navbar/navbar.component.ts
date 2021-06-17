import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  user: User[] = [];
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.checkToken();
  }

  checkToken(): void {
    this.user = [];

    if (localStorage.getItem('id_token')) {
      this.user.push(JSON.parse(localStorage.getItem('user')));
    } else {
      this.user = [];
    }
  }

  logout(): void{
    this.auth.logOutUser();
  }

}
