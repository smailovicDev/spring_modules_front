import { Directive, Input, ElementRef, SimpleChanges, OnInit, OnChanges } from '@angular/core';

@Directive({
  selector: '[appProgress]'
})
export class ProgressDirective implements OnInit{

  // @Input('appProgress') value : number;
   @Input('otherValue') other: number; 
  constructor( private el: ElementRef ) { 
    
  }

  ngOnInit(): void {
  //  this.el.nativeElement.style.backgroundColor = this.value;
  }
  // ngOnChanges(changes: SimpleChanges): void {
  //   //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //   //Add '${implements OnChanges}' to the class.
  //   console.log(this.other);

  // }

  @Input() set appProgress( pourcent: number){

    this.el.nativeElement.style.backgroundColor = (pourcent <50 ) ? 'blue':'green';
    this.el.nativeElement.style.width = pourcent+'%';
  }

}
