import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Services } from 'app/class/services'
import { ProvideServicesService } from '../../providers/provide-services.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addservices',
  templateUrl: './addservices.component.html',
  styleUrls: ['./addservices.component.scss']
})
export class AddservicesComponent implements OnInit {
  successMessage: boolean;
  errorMessage: string;

  service: Services = {
    service_name: '',
    service_payment: null
  }
  constructor( public http: HttpClient, private provideServices: ProvideServicesService, private router: Router ) { }

  ngOnInit() {
    // this.service = this.provideServices.GetService();
  }
  onSubmit(form: NgForm) {
    const data = {
      service_name: this.service.service_name,
      service_payment: this.service.service_payment,
    }
    console.log(data);

    this.provideServices.AddServices(this.service).subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl('/services');
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
    this.service = {
      service_name: '',
      service_payment: null
    }
    form.resetForm();
    this.errorMessage = '';
  }

}
