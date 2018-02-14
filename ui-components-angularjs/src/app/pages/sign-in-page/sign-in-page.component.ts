import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit{
    public signInForm: FormGroup;
    public loginError;
    constructor(public userService: UserService,
        public formBuilder: FormBuilder,
        public router: Router) { }
    ngOnInit() {
    this.signInForm = this.formBuilder.group({
      username: ['',Validators.required],
      password: '',
    });
  }
    doLogin() {
        this.userService.login(
        this.signInForm.get('username').value,
        this.signInForm.get('password').value).subscribe(loginResponse => {
            this.router.navigate(['tasks']);
        }, error => {
            this.loginError = 'Error Signing in: ' + (error && error.message ? error.message : '');
        })
    }

}
