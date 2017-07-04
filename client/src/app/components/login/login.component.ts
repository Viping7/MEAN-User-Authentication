import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';
import { FormService } from '../../services/form.service'
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private router:Router,private formService:FormService,private flashmessage:FlashMessagesService) { }

  ngOnInit() {
      this.buildForm();
  }
   login(user){
       if(user.value.username&&user.value.password){
          
           this.formService.logIn(user.value).subscribe(data=>{
               if(data.success){
                   this.formService.storeData(data.token,data.user);
                   this.flashmessage.show('Login Success', { cssClass: 'alert-success', timeout: 1000 });
                   setTimeout(()=>{this.router.navigate(['/dashboard'])},1100);
               }
               else{
                   this.flashmessage.show(data.msg,{cssClass:'alert-danger',timeout:2000});
               }
           })
       }
   }    
   buildForm(){
      this.loginForm=new FormGroup({
          username:new FormControl('',Validators.required),
          password:new FormControl('',Validators.required)
      })
  }      
}
