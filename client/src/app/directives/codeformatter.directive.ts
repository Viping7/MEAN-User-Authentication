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
        const regex = /(&lt;)(\s*|\S*)(&gt;)/g;
        let m;
        if(code!=''){
            var formattedcode=code.replace(/&lt;/gi,"<span class='color'>&lt;</span>");
            formattedcode=formattedcode.replace(/&gt;/gi,"<span class='color'>&gt;</span>");
            console.log(formattedcode);
            this.el.nativeElement.innerHTML=formattedcode;
        }
        
    }  }

