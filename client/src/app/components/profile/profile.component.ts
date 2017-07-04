import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user;
  constructor(private formservice:FormService,private router:Router) { }

  ngOnInit() {
      this.formservice.loadProfile().subscribe(data=>{
          this.user=data.user;
          
      });
  }

}
