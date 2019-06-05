import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Appointment} from 'app/class/appointment';
import { Billing } from 'app/class/billing';
import { ProvideServicesService } from '../providers/provide-services.service';
import * as jsPDF from 'jspdf';
// import jsPDF from 'jspdf';

@Component({
  selector: 'app-billing-report',
  templateUrl: './billing-report.component.html',
  styleUrls: ['./billing-report.component.scss']
})
export class BillingReportComponent implements OnInit {
  billings: Billing[];
  appointments: Appointment[];
  x : number;

  @ViewChild('content') content: ElementRef;

  constructor(private router: Router, public http: HttpClient, private provideServices: ProvideServicesService) { }

  ngOnInit() {
  }

  search(email){
    console.log(email);
    this.provideServices.CalculateBilling(email).subscribe((data: Appointment[]) => {
      this.appointments = data;
      var i;
      this.x=0;
      for(i = 0; i < data.length ; i++) {
        this.x+= data[i].payment;
      }
      console.log(data.length);
    })
  }

  public downloadPDF(){
    let doc = new jsPDF();
    let specialElementHandlers = {
      '#editor' : function(element, renderer){
        return true;
      }
    };
    let content = this.content.nativeElement;

    doc.fromHTML(content.innerHTML, 15, 15, {
      'width' : 190,
      'elementHandlers' : specialElementHandlers
    });

    doc.save('test.pdf');
  }
}
