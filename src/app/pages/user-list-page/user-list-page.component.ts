import{Component, OnInit}from '@angular/core';
import {UserService}from '../../services/user.service';
import {User} from "../../models/user";

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.css']
})

export class UserListPageComponent implements OnInit {
  private users;
  constructor(public userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(usersResponse=>{
      this.users = usersResponse;
    })
  }

}
