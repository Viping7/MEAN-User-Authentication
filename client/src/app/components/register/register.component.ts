import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';
import { FormService } from '../../services/form.service'
import { FlashMessagesService } from 'angular2-flash-messages';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
    message;
  constructor(private fb:FormBuilder,private formService:FormService,private router:Router,private flashmessage:FlashMessagesService) { }

  ngOnInit() {
       this.buildForm();
    
  }
register(user){
     console.log(user.value.confpassword,user.value.password);
    if(user.value.name&&user.value.email&&user.value.password&&user.value.username){
       if(user.value.password==user.value.confpassword){
           delete user.value.confpassword;
           this.formService.registerUser(user.value).subscribe(data=>{
               if(data.success){
                   this.flashmessage.show('You have registered successfully !!.Please wait while we redirect to login', { cssClass: 'alert-success', timeout: 4000 });
                   setTimeout(()=>{this.router.navigate(['/login'])},4100);
               }
               else{
                   this.flashmessage.show(data.msg, { cssClass: 'alert-danger', timeout: 1000 });
               }
           });          
       }
    }
}    
  buildForm(){
      this.registerForm=new FormGroup({
          name:new FormControl('',Validators.required), 
          email:new FormControl('',Validators.required),
          username:new FormControl('',Validators.required), 
          password:new FormControl('',Validators.required), 
          confpassword:new FormControl('',Validators.required) 
      })
  }    

}
