import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appNotIf]'
})
export class NotIfDirective {

  private hasView = false;

  constructor( private templateRef: TemplateRef<any>, private  viewContainerRef: ViewContainerRef  ) { }


@Input() set appNotIf( condition: boolean){

  if( !condition && !this.hasView){
    this.viewContainerRef.createEmbeddedView(this.templateRef);
    this.hasView = true;
  }else if( condition && this.hasView ){
    this.viewContainerRef.clear();
    this.hasView = false;
  }

}

}
