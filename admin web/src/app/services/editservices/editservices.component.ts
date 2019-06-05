import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Services } from 'app/class/services';
import { ProvideServicesService } from '../../providers/provide-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editservices',
  templateUrl: './editservices.component.html',
  styleUrls: ['./editservices.component.scss']
})
export class EditservicesComponent implements OnInit {
  service: Services;

  constructor( private provideServices: ProvideServicesService, private router: Router ) { }

  ngOnInit() {
    this.service = this.provideServices.GetService();
    // console.log("dfghjkhgfhjbkhbgvbjnkmjb")
    console.log(this.service);
    // this.client.lname = data.lname;
  }

  onSubmit(form: NgForm) {
    console.log(this.service)
    this.provideServices.UpdateServices(this.service).subscribe(
        data => {
          console.log(data);
          this.router.navigateByUrl('/services');
        },
        error => {
          console.log(error);
        }
      )
    // if (this.client.fname == undefined) {
    //   console.log("hgbuhyu,huhujhuhui");
    //   this.provideServices.AddClient(this.client).subscribe(
    //     data => {
    //       console.log(data);
    //       this.router.navigateByUrl('/client');
    //     },
    //     error => {
    //       console.log(error);
    //     }
    //   )
    // } else {
    //   this.provideServices.UpdateClient(this.client).subscribe(
    //     data => {
    //       console.log(data);
    //       this.router.navigateByUrl('/client');
    //     },
    //     error => {
    //       console.log("xxx")
    //       console.log(error);
    //     }
    //   )
    // }
  }

}
