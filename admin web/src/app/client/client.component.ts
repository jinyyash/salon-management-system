import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Addclient } from 'app/class/addclient';
import { ProvideServicesService } from '../providers/provide-services.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  clients: Addclient[];
  
  constructor(private router: Router, public http: HttpClient, private provideServices: ProvideServicesService ) { }

  ngOnInit() {
    // this.http.get('http://localhost:3000/api/clientview').subscribe((data: Addclient[]) => {
    //   this.clients = data;
    //   console.log(data);
    // })
    this.provideServices.ViewClient().subscribe((data: Addclient[]) => {
      this.clients = data;
      console.log(data);
    })
  }

  // addingclient(event:any) {
  //   event.preventDefault();
  //   this.provideServices.Setter(new Addclient());
  //   this.router.navigateByUrl('client/add');
  // }

  // toUpdate(client) {
  //   console.log(client._id);
  //   this.provideServices.Setter(client);
  //   // console.log(this.clientee);
  //   this.router.navigateByUrl('client/update');
  // }

  toDelete(client){
    console.log("delete");
    this.provideServices.DeleteClient(client._id).subscribe(
      data => {
        console.log("delete");
        this.clients.splice(this.clients.indexOf(client),1);
      },
      error => {
        console.log(error);
      }
    )
  }

}
