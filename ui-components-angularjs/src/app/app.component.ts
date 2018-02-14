import{Component}from'@angular/core';
import { FormGroup } from '@angular/forms/src/model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './common/auth.service';
import { Router } from '@angular/router';

import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  private navForm:FormGroup;
  private byemail:string='';
  private edited:string;

  constructor(
    private modalService:NgbModal,
    public authService: AuthService,
    public router: Router,
    public userService: UserService
  ) {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/']);
    }
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  smit(modal){
    this.userService.findByEmail(this.byemail).subscribe(
      response=>{
        this.edited="<div>username: "+response.username+"</div><div>email: "+response.email+"</div><div>firstname: "+response.firstname+"</div><div>lastname: "+response.lastname+"</div><div>image: <img src='"+response.image+"' width='150' height='150' /></div>";
      }, error => {
        this.edited="<div>No user found with the email address</div>";
      }
    );
     this.modalService.open(modal);
  }

  signOut() {
    this.authService.signOut();
  }

}
