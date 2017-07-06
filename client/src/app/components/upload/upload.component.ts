import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service'
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
   avatar;
  constructor(private formService:FormService) { }
   getFiles(event){ 
         
        this.avatar = event.target.files; 
        this.formService.uploadPic(this.avatar).subscribe(data=>{
            console.log(data);
        })
    } 
  ngOnInit() {
  }

}
