import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // header: HttpHeaders = new HttpHeaders().set("Content-Type", "application/json");

   headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization':''});
   options = { headers: this.headers };

  constructor(private http: HttpClient) { }

  login(user: User){
    return this.http.post('http://localhost:8080/login', JSON.stringify(user), {observe: 'response'});
  }
}
