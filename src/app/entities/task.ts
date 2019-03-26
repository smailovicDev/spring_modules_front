export class Task {

    private id?: number;
    private taskName: string;
    private description: string;
    private serId: number;
    private dateCreation: Date;
    private dateFin: Date;
    private status: boolean;
    private pourcent: number;

    constructor( id?: number, taskName?: string, description?: string,
         serId?: number, dateCreation?: Date, dateFin?: Date, status?: boolean,  pourcent?: number ){
        this.id= id;
        this.taskName= taskName ? taskName : '' ;
        this.description= description ? description : '' ;
        this.serId = serId? serId: 0;
        this.dateCreation = dateCreation ? dateCreation : new Date();
        this.dateFin = dateFin ? dateFin : new Date() ;
        this.status = status ? status : false;
        this.pourcent = pourcent ? pourcent : 0;
    }
}
