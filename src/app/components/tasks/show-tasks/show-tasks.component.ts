import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from 'src/app/entities/task';

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
    this.taskService.getTasks().subscribe( (res: Task[]) => { this.tasks = res 
    });
  }



}
