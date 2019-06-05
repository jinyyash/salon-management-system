import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthServiceService} from '../auth-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(public authService: AuthServiceService) { }

  ngOnInit() {
  }
  onSignUp(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.createUser(email, password);
  }
}
