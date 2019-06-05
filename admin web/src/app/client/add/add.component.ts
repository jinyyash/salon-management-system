import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Addclient } from 'app/class/addclient';
import { ProvideServicesService } from '../../providers/provide-services.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  successMessage: boolean;
  errorMessage: string;
  client: Addclient = {
    fname: '',
    lname: '',
    email: '',
    phone: null
  }
  // emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // phone =/^(\+94)[0-9]{9,9}$/;

  constructor( public http: HttpClient, private provideServices: ProvideServicesService, private router: Router ) { }

  ngOnInit() {
    this.client = this.provideServices.Getter();
  }
  onSubmit(form: NgForm) {
    const data = {
      fname: this.client.fname,
      lname: this.client.lname,
      email: this.client.email,
      phone: this.client.phone
    }
    console.log(data);

    this.provideServices.AddClient(this.client).subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl('/client');
      },
      error => {
        console.log(error);
      }
    )

    // this.http.post('http://localhost:3000/api/clientadding', data).subscribe(
    //   res => {
    //     this.successMessage = true;
    //     setTimeout(() => this.successMessage = false, 4000);
    //   },
    //   err => {
    //     if (err.status === 422) {
    //       this.errorMessage = err.error.join('<br/>');
    //     } else {
    //       this.errorMessage = 'Something went wrong';
    //     }
    //   }
    // )
  }

  // resetForm(form: NgForm){
  //   this.client.fname = '';
  //   this.client.lname = '';
  //   this.client.email = '';
  //   this.client.phone = null;
  //   form.resetForm();
  // }
  resetForm(form: NgForm) {
    this.client = {
      fname: '',
      lname: '',
      email: '',
      phone: null
    }
    form.resetForm();
    this.errorMessage = '';
  }
}
