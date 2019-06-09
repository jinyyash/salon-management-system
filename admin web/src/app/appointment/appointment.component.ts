import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Appointment} from 'app/class/appointment';

import { ProvideServicesService } from '../providers/provide-services.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  appointments:Appointment[];

  constructor(private router: Router, public http: HttpClient, private provideServices: ProvideServicesService) { }

  ngOnInit() { 
    this.provideServices.ViewAppointment().subscribe((data: Appointment[]) => {
      this.appointments = data;
      console.log(data);
    })

  }
  toDelete(appointment){
    console.log("delete");
    this.provideServices.DeleteClient(appointment._id).subscribe(
      data => {
        console.log("delete");
        this.appointments.splice(this.appointments.indexOf(appointment),1);
      },
      error => {
        console.log(error);
      }
    )
  }

  toAccept(appointment){
    const mail={
      eemail:appointment.email,
      servicename:appointment.bookingServices,
    }
    this.provideServices.sentmail(mail).subscribe(
      result=>{
        console.log("email sent");
      }
    )
  }


}


  

 
  






