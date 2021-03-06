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
      var formData=new FormData();
      var pic=user.avatar;
      formData.append("name",user.name);
      formData.append("email",user.email);
      formData.append("username",user.username);
      formData.append("password",user.password);
      formData.append("avatar", pic[0], pic[0]['name']);
   return this.http.post('users/register',formData).map(response=>response.json());    
  }
    logIn(user){
        return this.http.post('users/authentication',user).map(response=>response.json());
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
        return this.http.get('users/profile',{headers:headers}).map(res=>res.json());
    }
    loadToken(){
        var authtoken=localStorage.getItem('id_token');
        this.token=authtoken;
    }
    uploadPic(pic){
        var formData=new FormData();
        formData.append("files", pic[0], pic[0]['name']);
        return this.http.put('users/upload/username=vipin',formData).map(response=>response.json());
    }
   getFile(url){
        return this.http.get(url).map(res=>res);
    }
    
}
