import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/entities/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  loginError: boolean = false;
  constructor( private http: HttpClient, private usersService: UsersService, private router: Router) { }

  ngOnInit() {

    localStorage.removeItem('Authorization');
  }

  singIn(){
    this.usersService.login(this.user).subscribe( 
      (resp: HttpResponse<any>) =>{
        console.log( " Authenticated   "); 
        localStorage.setItem('Authorization',resp.headers.get('Authorization') );
        this.router.navigate(['/tasks']);
      },
      err => { this.loginError = true;  console.log(err);}
    )
  }

}
