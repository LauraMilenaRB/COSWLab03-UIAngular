export class User {
    public username: string;
    public email: string;
    public password:string;
    public firstname: string;
    public lastname: string;
    public image: string;

constructor(username:string,password:string,email:string,firstname: string, lastname: string, image: string) {
        this.username=username;
        this.email=email;
        this.firstname = firstname;
        this.lastname = lastname;
        this.image = image;
        this.password=password
    }
}