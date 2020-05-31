import { Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appDisplay]'
})
export class DisplayDirective {
  
  constructor(private tplRef: TemplateRef<any>, private vwRef:ViewContainerRef) { }
  
  @Input() set appDisplay(condition:boolean){
    if(condition){
       this.vwRef.createEmbeddedView(this.tplRef);
    }else{
      this.vwRef.clear();
    }
  }
  

}
