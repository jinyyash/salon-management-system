import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Billing } from 'app/billing';
import { ProvideServicesService } from '../providers/provide-services.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  billings: Billing[];
  
  constructor( private router: Router, public http: HttpClient, private provideServices: ProvideServicesService ) { }

  ngOnInit() {
    this.provideServices.ViewBilling().subscribe((data: Billing[]) => {
      this.billings = data;
      console.log(data);
    })
  }

  billing() {

  }
}
