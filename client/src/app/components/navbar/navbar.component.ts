import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service'
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private formService:FormService,private flashMessage:FlashMessagesService,private router:Router) { }

  ngOnInit() {
      
  }
 logout(){
     this.formService.logout();
     this.flashMessage.show('Successfully Logged out', { cssClass: 'alert-success', timeout: 1000 });
     this.router.navigate(['/login']);
 }
}
