import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/entities/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  constructor( private http: HttpClient, private usersService: UsersService) { }

  ngOnInit() {
  }

  singIn(){
    this.usersService.login(this.user).subscribe( 
      (resp: HttpResponse<any>) =>{ console.log(resp.headers.get('Authorization')) },
    )
  }

}
