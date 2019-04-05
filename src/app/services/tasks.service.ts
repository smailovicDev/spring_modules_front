import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../entities/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  /* this method work fine but it's not the good one if we set the
     token in the heder of our request her we should do it every time like this for all services
     the perfect way is to use jwtModule or to use custom http interceptor to set all required headers   
   */
  //headers = new HttpHeaders({'Content-Type': 'application/json' });
  // ,'Authorization': localStorage.getItem('Authorization')
  constructor(private http: HttpClient) { }


  getTasks(){
    //this.headers.set('Authorization', localStorage.getItem('Authorization'))
    
    return this.http.get('http://localhost:8080/tasks');
  }

  saveTask( task: Task){
    return this.http.post('http://localhost:8080/tasks', task);
  }


}
