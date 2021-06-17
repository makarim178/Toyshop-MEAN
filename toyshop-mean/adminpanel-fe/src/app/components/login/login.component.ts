import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};

  constructor(private auth: AuthService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onLoginSubmit(){
    // console.log(this.model);
    this.auth.authenticateUser(this.model).subscribe((data) => {
      this.auth.storeUserData(data.token, data.user);
      this.router.navigate(['/profile']);
    });
  }

}
