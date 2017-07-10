import { Directive,ElementRef ,AfterViewChecked} from '@angular/core';

@Directive({
  selector: '[appCodeformatter]'
})
export class CodeformatterDirective implements AfterViewChecked {
    splittedcode;
  constructor(private el:ElementRef) {
  
  }
    ngAfterViewChecked() {
        var code=this.el.nativeElement.innerHTML;
         if(code!=""){
             var regex_pattern=/(&lt;(\s*|\S*)&gt);/;
             var formatted=code.split('\n');
               var splittedstring=[];
             for(var i=0;i<formatted.length;i++){
                 splittedstring.push(formatted[i].match(regex_pattern));
                console.log(splittedstring); 
             }
                /*for(var i=0;i<splittedstring.length;i++){
             /*   var data=data+'&lt;<span class="color">'+this.splittedcode[i]+'</span>';
                if(i==this.splittedcode.length-1){
                this.el.nativeElement.innerHTML=data;
                }
                    console.log(splittedstring[i]);
            }*/
        }
        
    }  
}
