import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { NgForm } from "@angular/forms";
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  email:any = '';
  password:any ='';

  constructor(private loginservice: LoginService, private http: HttpClient, private route: Router) { }

  ngOnInit(): void {
  }

  postData(formData:any) {
    let headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
 
    const baseUrl = 'http://localhost:3000/auth/login';
    const data = {
        email: formData.email,
        password: formData.password,
    }
    
    this.http.post(baseUrl, data, { headers: headers }).subscribe((res) => {
      if(formData.email){
        console.log(res);
        
      }
      else{
        console.log("please enter email");
      }
    })
  }
}
