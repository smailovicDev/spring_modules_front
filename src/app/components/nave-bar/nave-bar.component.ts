import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nave-bar',
  templateUrl: './nave-bar.component.html',
  styleUrls: ['./nave-bar.component.css']
})
export class NaveBarComponent implements OnInit {

  userName: string = null;
  selectedLangue ;

  constructor( private jwtHelper: JwtHelperService, private router: Router, private translateService: TranslateService) { 

  }

  ngOnInit() {
     this.userName = this.jwtHelper.decodeToken(localStorage.getItem('Authorization'))?
     this.jwtHelper.decodeToken(localStorage.getItem('Authorization')).sub: '' ;
     this.selectedLangue = this.translateService.getDefaultLang();
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

  switchLang(){
    this.translateService.use(this.selectedLangue);
  }

}
