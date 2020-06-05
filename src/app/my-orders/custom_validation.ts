import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';

export class CustomValidation{
    static cannotSpace(control: AbstractControl): ValidationErrors | null{
        if((control.value as string).indexOf(' ')>=0){
            return {cannotspace:true}
        }
        else{
            return null;
        }
    }

    static validate(control: AbstractControl): Promise<ValidationErrors | null>{
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                // console.log(control);
                
                if (control.value === 'shubh') {
                  resolve({ 'namenotallow': true })
                }
                else {
                  resolve(null)
                }
              }, 1000);
        })
    }
   
}