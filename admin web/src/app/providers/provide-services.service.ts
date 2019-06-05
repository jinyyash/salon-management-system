import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Addclient } from '../class/addclient';
import { Billing } from '../class/billing';
import { Services } from '../class/services';
import { Clientcount } from '../class/clientcount';
import { Appointment } from '../class/appointment';

@Injectable({
  providedIn: 'root'
})
export class ProvideServicesService {

  private client: Addclient;
  private bill: Billing;
  private services: Services;
  private clientcount: Clientcount;
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
  CalculateBilling(email: string){
    return this.http.get(this.apiBaseUrl + '/calculateBilling/' + email);
  }

  // appointment
  ViewAppointment() {
    return this.http.get(this.apiBaseUrl + '/appointmentview');
  }
  SearchAppointment(){
  }

  // services
  ViewServices() {
    return this.http.get(this.apiBaseUrl + '/servicesview');
  }
  AddServices(services: Services) {
    return this.http.post(this.apiBaseUrl + '/serviceadding', services);
  }
  UpdateServices(services: Services) {
    return this.http.put(this.apiBaseUrl + '/serviceupdate', services);
  }
  DeleteServices(id: string) {
    return this.http.delete(this.apiBaseUrl + '/servicedelete/' + id);
  }
  SetService(services: Services) {
    this.services = services;
  }
  GetService() {
    return this.services;
  }

  //client count
  CountClient() {
    return this.http.get(this.apiBaseUrl + '/clientcount');
  }
}

