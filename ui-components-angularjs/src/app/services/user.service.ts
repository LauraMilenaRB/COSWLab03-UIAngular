import{Injectable}from'@angular/core';
import { User}from '../models/user';
import {Observable} from "rxjs/Observable";
import {APIService} from "../common/api.service";
import {AuthService} from "../common/auth.service";
import {AppConfiguration} from "../common/config/app-configuration.service";
import { Http} from '@angular/http';

@Injectable()
export class UserService extends APIService{
    constructor(
          public config: AppConfiguration,
          public authService: AuthService,
          public http: Http
    ){
        super(config, authService, http);
    }
    login(username: string, password: string) {
        return this.post('/user/login', { username, password }, { credentials: false }).map(loginResponse => {
            if (loginResponse) {
                this.authService.accessToken = loginResponse.accessToken;
        }
      });
    }
    getUsers():Observable<User[]>{
        return this.get('user/listuser');
    }
    registerUser(username: string, email :string, password: string,firstname: string,lastname: string,image:string ){
        return this.post('user/newuser', {username: username, email :email, password: password,firstname: firstname,
          lastname: lastname,image:image})
    }

    findByEmail(email: string): Observable<User>{
        return this.get("user/byEmail/"+email);
    }

}
