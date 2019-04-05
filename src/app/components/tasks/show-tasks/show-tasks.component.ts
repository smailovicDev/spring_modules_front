import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from 'src/app/entities/task';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-show-tasks',
  templateUrl: './show-tasks.component.html',
  styleUrls: ['./show-tasks.component.css']
})
export class ShowTasksComponent implements OnInit {

  tasks: Task[];
  constructor(private taskService: TasksService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(){
    this.taskService.getTasks()

  //   .pipe( (tasks:Observable<any>)  =>  tasks.filter( (t: Task) => t.taskName == "T2" )  )
       .subscribe(  
         (res : Task[]) => this.tasks = res
         );
  }
  //this.tasks = this.getFiltredTable( res);
  getFiltredTable( res: Task[] ){
   return res.filter( (t:Task) => t.taskName.indexOf("T1") === -1 ) ;
  }

}
