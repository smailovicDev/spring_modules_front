import { Validators } from "@angular/forms";
import { forbiddenNameValidator } from "../validators/forbidden-name.directive";

export class ReactiveTask {


    private id?;
    private taskName;
    private description;
    private serId;
    private dateCreation;
    private dateFin;
    private status;
    private pourcent;

    constructor( id?: number, taskName?: string, description?: string,
         serId?: number, dateCreation?: Date, dateFin?: Date, status?: boolean,  pourcent?: number ){
        this.id= id;
        this.taskName= [taskName ? taskName : '', [ Validators.required,
             Validators.minLength(3), Validators.maxLength(10), forbiddenNameValidator(/task/i), Validators.pattern("^[0-9].{9}$")]] ;
        this.description= [description ? description : '', Validators.required] ;
        this.serId = [serId? serId: 0, [Validators.min(10), Validators.max(99)]];
        this.dateCreation = [dateCreation ? dateCreation : new Date()];
        this.dateFin = [dateFin ? dateFin : new Date()] ;
        this.status = [status ? status : false];
        this.pourcent = [pourcent ? pourcent : 0];
    }
}
