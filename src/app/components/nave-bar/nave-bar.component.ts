import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nave-bar',
  templateUrl: './nave-bar.component.html',
  styleUrls: ['./nave-bar.component.css']
})
export class NaveBarComponent implements OnInit {

  userName: string = null;

  constructor( private jwtHelper: JwtHelperService, private router: Router) { 

  }

  ngOnInit() {
     this.userName = this.jwtHelper.decodeToken(localStorage.getItem('Authorization'))?
     this.jwtHelper.decodeToken(localStorage.getItem('Authorization')).sub: '' ;
  }


  showNaveBar(){

    const jwt = localStorage.getItem('Authorization');
    const isExpired= this.jwtHelper.isTokenExpired( jwt );
    return !isExpired;
  }

  logout(){
    localStorage.removeItem('Authorization');
    this.router.navigate(['/login']);

  }

}
