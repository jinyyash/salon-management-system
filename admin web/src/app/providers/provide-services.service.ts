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
  private apiBaseUrl = 'http://localhost:4003/api' ;
  // private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor( public http: HttpClient ) {
    console.log('Provider');
  }

   // client
  // AddClient(client: Addclient) {
  //   return this.http.post(this.apiBaseUrl + '/clientadding', client);
  // }

  ViewClient() {
    return this.http.get(this.apiBaseUrl + '/client/view');
  }

  // UpdateClient(client: Addclient) {
  //   return this.http.put(this.apiBaseUrl + '/clientupdate', client);
  // }

  DeleteClient(id: string) {
    return this.http.delete(this.apiBaseUrl + '/client/delete/' + id);
  }

  Setter(client: Addclient) {
    this.client = client;
  }
  Getter() {
    return this.client;
  }

  // billing
  ViewBilling() {
    return this.http.get(this.apiBaseUrl + '/billing/view');
  }
  CalculateBilling(email: string){
    return this.http.get(this.apiBaseUrl + '/billing/calculate/' + email);
  }

  // appointment
  ViewAppointment() {
    return this.http.get(this.apiBaseUrl + '/appointmentview');
  }
  SearchAppointment(){
  }

  // services
  ViewServices() {
    return this.http.get(this.apiBaseUrl + '/services/view');
  }
  AddServices(services: Services) {
    return this.http.post(this.apiBaseUrl + '/services/add', services);
  }
  UpdateServices(services: Services) {
    return this.http.put(this.apiBaseUrl + '/services/update', services);
  }
  DeleteServices(id: string) {
    return this.http.delete(this.apiBaseUrl + '/services/delete/' + id);
  }
  SetService(services: Services) {
    this.services = services;
  }
  GetService() {
    return this.services;
  }

  //client count
  CountClient() {
    return this.http.get(this.apiBaseUrl + '/client/count');
  }
  Createchart(){
    return this.http.get(this.apiBaseUrl + '/chart/view')
  }
}

