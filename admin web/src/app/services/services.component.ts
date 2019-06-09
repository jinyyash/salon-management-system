import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Addclient } from 'app/class/addclient';
import { Services } from 'app/class/services';
import { ProvideServicesService } from '../providers/provide-services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  services: Services[];

  constructor(private router: Router, public http: HttpClient, private provideServices: ProvideServicesService ) { }

  ngOnInit() {
    // this.http.get('http://localhost:3000/api/clientview').subscribe((data: Addclient[]) => {
    //   this.clients = data;
    //   console.log(data);
    // })
    this.provideServices.ViewServices().subscribe((data: Services[]) => {
      this.services = data;
      console.log(data);
    })
  }

  addingservice(event:any) {
    event.preventDefault();
    this.provideServices.SetService(new Services());
    this.router.navigateByUrl('services/add');
  }

  toUpdate(service) {

    // const data = {
    //   fname: client.fname,
    //   lname: client.lname,
    //   email: client.email,
    //   phone: client.phone
    // }
    // this.clientee=client;
    console.log(service._id);
    this.provideServices.SetService(service);
    // console.log(this.clientee);
    this.router.navigateByUrl('services/update');
  }

  toDelete(service){
    console.log("delete");
    this.provideServices.DeleteServices(service._id).subscribe(
      data => {
        console.log("delete");
        this.services.splice(this.services.indexOf(service),1);
      },
      error => {
        console.log(error);
      }
    )
  }

}
