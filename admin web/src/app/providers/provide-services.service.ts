import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Addclient } from '../addclient';
import { Billing } from '../billing';

@Injectable({
  providedIn: 'root'
})
export class ProvideServicesService {

  private client: Addclient;
  private bill: Billing;
  private apiBaseUrl = 'http://localhost:3000/api' ;
  // private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor( public http: HttpClient ) {
    console.log('Provider');
  }

   // client
  AddClient(client: Addclient) {
    return this.http.post(this.apiBaseUrl + '/clientadding', client);
  }

  ViewClient() {
    return this.http.get(this.apiBaseUrl + '/clientview');
  }

  UpdateClient(client: Addclient) {
    return this.http.put(this.apiBaseUrl + '/clientupdate', client);
  }

  DeleteClient(id: string) {
    return this.http.delete(this.apiBaseUrl + '/clientdelete/' + id);
  }

  Setter(client: Addclient) {
    this.client = client;
  }
  Getter() {
    return this.client;
  }

  // billing
  ViewBilling() {
    return this.http.get(this.apiBaseUrl + '/billingview');
  }
}

