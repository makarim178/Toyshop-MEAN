import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

// tslint:disable-next-line:typedef
function passwordMatchValidator(form) {
  const password = form.get('password');
  const confirmPassword = form.get('confirmPassword');

  if (password.value !== confirmPassword.value) {
    confirmPassword.setErrors({ passwordsMatch: true });
  } else {
    confirmPassword.setErrors(null);
  }
  return null;
}


/**
 * If the data is valid then return null else return an object
 * This rule is a must for validators
 */
// tslint:disable-next-line:typedef
function symbolValidator(control) {
  if ( control.hasError('required')) { return null; }

  if ( control.hasError('minlength')) { return null; }

  if (control.value.indexOf('@') > -1){
    return null;
  } else {
    return { symbol: true };
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private builder: FormBuilder,
              private auth: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.registerForm = this.builder.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      role: '',
      userName: ['', Validators.required],
      password: ['', [Validators.required, symbolValidator, Validators.minLength(4)]],
      confirmPassword: '',
      check: ['', Validators.required]
    }, { validators: passwordMatchValidator });
  }

  // tslint:disable-next-line:typedef
  onRegister(){
    console.log(this.registerForm.value);

    const user = {
      name: this.registerForm.get('name').value,
      email: this.registerForm.get('email').value,
      role: this.registerForm.get('role').value,
      username: this.registerForm.get('userName').value,
      password: this.registerForm.get('password').value
    };

    console.log(user);

    this.auth.registerUser(user).subscribe((data) => {
      if (data.success){
        this.router.navigate(['/login']);
      } else {
        console.log(data.msg);
      }
    });
  }
}
