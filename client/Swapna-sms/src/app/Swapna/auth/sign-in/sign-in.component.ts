import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  data: Date = new Date();
  focus;
  focus1;

  constructor() {
  }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('login-page');

    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }

  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('login-page');

    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }
  onSignIn(form: NgForm) {
    console.log(form.value.email);
    const email = form.value.email;
    const password = form.value.password;
  }

}
