import{Component, OnInit}from '@angular/core';
import {UserService} from "../../services/user.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-edit-page',
  templateUrl: './user-edit-page.component.html',
  styleUrls: ['./user-edit-page.component.css']
})
export class UserEditPageComponent implements OnInit {
  private userForm :FormGroup;
  private edit = false;
  constructor(
    public userService: UserService,
    public formBuilder: FormBuilder,
    public router: Router,
  ) {

  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      username: '',
      email: '',
      passw:'',
      name: '',
      lastname: '',
      image: ''
    });
  }

  onSubmit() {
    this.userService.registerUser(
      this.userForm.get('username').value,
      this.userForm.get('email').value,
      this.userForm.get('passw').value,
      this.userForm.get('name').value,
      this.userForm.get('lastname').value,
      this.userForm.get('image').value
    ).subscribe(serverResponse=>{

      this.router.navigate(['/user-list']);
    }, error=>{
      console.log(error);
    });
  }

}
