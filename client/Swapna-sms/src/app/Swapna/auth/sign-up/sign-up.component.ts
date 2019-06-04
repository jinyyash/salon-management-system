import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSignUp(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    console.log(email);
  }
}
