import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthServiceService} from '../auth-service.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  private authStatusSub: Subscription;
  isLoading = false;

  constructor(public authService: AuthServiceService) { }
  ngOnInit() {
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
        authStatus => {
          this.isLoading = false;
        }
    );
  }
  onSignUp(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    const data = {
      name: form.value.name,
      email: email,
      contactNum: form.value.contactNum
    }
    console.log(email + password)
    this.isLoading = true;
    this.authService.createUser(email, password, data);



  }
}
