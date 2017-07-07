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
            /*var filepath='./uploads/'+data.user.file[0].filename;
            this.formService.getFile(filepath).subscribe(data=>{
                console.log(data); 
            });*/
            console.log(data);
        })
    } 
  ngOnInit() {
  }

}
