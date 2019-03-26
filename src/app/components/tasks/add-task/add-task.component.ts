import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/entities/task';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  task: Task;
  
  constructor() { }

  ngOnInit() {
    this.task= new Task();
  }

}
