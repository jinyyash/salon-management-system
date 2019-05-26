import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Addclient } from 'app/addclient';
import { ProvideServicesService } from '../../providers/provide-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  client: Addclient;

  constructor( private provideServices: ProvideServicesService, private router: Router ) { }

  ngOnInit() {
    this.client = this.provideServices.Getter();
    // console.log("dfghjkhgfhjbkhbgvbjnkmjb")
    // console.log(this.client);
    // this.client.lname = data.lname;
  }

  onSubmit(form: NgForm) {
    if(this.client.fname == undefined){
      console.log("hgbuhyu,huhujhuhui");
      this.provideServices.AddClient(this.client).subscribe(
        data => {
          console.log(data);
          this.router.navigateByUrl('/client');
        },
        error => {
          console.log(error);
        }
      )
    }else{
      this.provideServices.UpdateClient(this.client).subscribe(
        data => {
          console.log(data);
          this.router.navigateByUrl('/client');
        },
        error => {
          console.log("xxx")
          console.log(error);
        }
      )
    }
  }
}
