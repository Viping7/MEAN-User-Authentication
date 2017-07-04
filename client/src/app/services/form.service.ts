import { Injectable } from '@angular/core';
import { Http, Headers }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';
@Injectable()
export class FormService {
token:any;
user:any;    
  constructor(private http:Http) {
  }
  registerUser(user){
    return this.http.post('http://localhost:3000/users/register',user).map(response=>response.json());    
  }
    logIn(user){
        return this.http.post('http://localhost:3000/users/authentication',user).map(response=>response.json());
    }
    storeData(token,user){
        localStorage.setItem('id_token',token);
        localStorage.setItem('user',JSON.stringify(user));
        this.token=token;
        this.user=user;
    }
    logout(){
        this.token='';
        this.user='';
        localStorage.clear();
    }
    loggedIn(){
        return tokenNotExpired('id_token');
    }
    loadProfile(){
        var headers=new Headers();
        this.loadToken();
        headers.append('Authorization',this.token);
        return this.http.get('http://localhost:3000/users/profile',{headers:headers}).map(res=>res.json());
    }
    loadToken(){
        var authtoken=localStorage.getItem('id_token');
        this.token=authtoken;
    }
    
}
