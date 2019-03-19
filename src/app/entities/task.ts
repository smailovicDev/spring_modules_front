export class Task {

    private id?: number;
    private taskName: string;
    private description: string;

    constructor( id?: number, taskName?: string, description?: string ){
        this.id= id;
        this.taskName= taskName;
        this.description= description
    }
}
