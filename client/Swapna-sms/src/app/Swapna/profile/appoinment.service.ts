import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { AppoinmetModal } from './appoinment.modal';

@Injectable({
  providedIn: 'root'
})
export class AppoinmentService {

    private posts: AppoinmetModal[] = [];

    constructor(private http: HttpClient) { }

  addAppoinment(data: any) {
    /*const postData = new FormData();
    postData.append('name', name);
    postData.append('email', email);
    postData.append('contactNum',  contactNum);
    postData.append('bookingServices',  bookingServices);
    postData.append('bookingDate',  bookingDate);
    postData.append('bookingTime',  bookingTime);
    postData.append('status',  status + '');*/

    console.log(data);



    this.http
        .post(
            'http://localhost:3000/api/appointments',
            data
        )
        .subscribe(responseData => {
          console.log(responseData)
        });
  }

    getPosts() {
        this.http
            .get<{ message: string; posts: any}>(
                'http://localhost:3000/api/appointments'
            )
            .pipe(
                map(postData => {
                    return {
                        posts: postData.posts.map(post => {
                            return {
                                name : post.name,
                                email : post.email,
                                contactNum: post.contactNum,
                                bookingServices : post.bookingServices,
                                bookingDate : post.bookingDate,
                                bookingTime : post.bookingTime,
                                status : status,
                                creator: post.creator
                            };
                        }),
                    };
                })
            )
            .subscribe(transformedPostData => {
                this.posts = transformedPostData.posts;
            });
    }

}
