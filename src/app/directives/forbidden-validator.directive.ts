import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { forbiddenNameValidator } from '../validators/forbidden-name.directive';

@Directive({
  selector: '[appForbiddenValidator]',
  providers:[ 
    { provide: NG_VALIDATORS , useExisting: ForbiddenValidatorDirective, multi: true}
  ]
})
export class ForbiddenValidatorDirective implements Validator {
  

  @Input('appForbiddenValidator') forbiddenName: string;


  constructor() { }

  validate(control: AbstractControl): {[key: string ]: any} | null {
    
    // we can implement our fucntion directly by creating our new regExpession
    // and test if forbidenName match it 

     let regExp = new RegExp(this.forbiddenName, 'i' );
     let testValidation = regExp.test(control.value);

    // this validator return key:value or null the key is forbiddenName
    // we can use it to display error message in html template 

     return testValidation ? {'forbiddenName': control.value} : null ;

    // or we can simply use the validator function that we have created in validators/forbidden-name.directive
    // return this.forbiddenName ? forbiddenNameValidator( new RegExp(this.forbiddenName, 'i' ))(control) : null ;
  }
  

}
