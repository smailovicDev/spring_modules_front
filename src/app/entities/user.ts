export class User {

    private id?: number;
    private login: string;
    private password: string;

    constructor(login?: string, password?: string, id?: number){
        this.id= id;
        this.login= login;
        this.password= password;
    }
}
