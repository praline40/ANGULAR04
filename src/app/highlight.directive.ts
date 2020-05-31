import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding} from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective implements OnInit {

  @HostBinding('style.color') myTextColor:string;
  @HostBinding('style.fontSize') myTextFont:string;
  @HostBinding('class.red24px') myRed24:boolean;
  
  //constructor(private elRef:ElementRef, private renderer:Renderer2) { }
  constructor() { }

  ngOnInit(){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');

  }

  @HostListener('mouseenter') mouseEnterEvent (eventData:Event){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
    //this.myTextColor = 'red';
    //this.myTextFont = '24px';
    
    this.myRed24 = true; 
  }

  @HostListener('mouseleave') mouseLeaveEvent (eventData:Event){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    //this.myTextColor = 'black';
    //this.myTextFont = '16px';
    this.myRed24 = false; 
  }

}
