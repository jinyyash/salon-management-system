import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// import {Appointment} from 'app/class/appointment';
import { Billing } from 'app/class/billing';
import { ProvideServicesService } from '../providers/provide-services.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  billings: Billing[];
  // appointments: Appointment[];
  
  constructor( private router: Router, public http: HttpClient, private provideServices: ProvideServicesService ) { }

  ngOnInit() {
    this.provideServices.ViewBilling().subscribe((data: Billing[]) => {
      this.billings = data;
      console.log(data);
    })
  }

  // search(email) {
  //   console.log(email);
  //   this.provideServices.CalculateBilling(email).subscribe((data: Billing[]) => {
  //     this.billings = data;
  //     console.log(data.length);
  //   })
  // }
}
