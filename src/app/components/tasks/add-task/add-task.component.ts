import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/entities/task';
import { TasksService } from 'src/app/services/tasks.service';
import { Router } from '@angular/router';
import { FormBuilder, AbstractControl } from '@angular/forms';
import { ReactiveTask } from 'src/app/entities/reactive-task';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

// this component use for template driving forms and validation with html directives
// we already use task class to save manipulate our task now we going to switch to reactive forms.

export class AddTaskComponent implements OnInit {

  useReactive: boolean = false;
  task: Task;
  taskForm: any;
// to create reactive forms we can use formGroupe with formControle classes or simply inject formBuilder service  
  constructor( private taskService: TasksService, private router: Router,
     private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.task= new Task();
    // this object is used to test reactive forms with from builder 
    this.taskForm = this.formBuilder.group( new ReactiveTask());
  }

  saveTask(){
    this.taskService.saveTask( this.task).subscribe( 
      res => { console.log( res ); 
               this.router.navigate(['/tasks']); },
      err => console.error( err)
    );
    
  }
// this one to save reactive form 
  onSubmitReactive( ){
    console.log( this.taskForm.value );

    if (this.taskForm.invalid) {
      return;
    }

    this.task = this.taskForm.value;
    this.saveTask();
  }

  // to use pourcent.value in html template we should add this getter look
  //  at pourcent element of reactive form of htm template 
  get pourcent(): AbstractControl { 
    return this.taskForm.get('pourcent');
  }

  // get taskName(){
  //   return this.taskForm.get('taskName');
  // }

  // to acces taskForm values form html template we can create a getter for every filed of taskForm this work fin
  // but we can do better with one getter of the taskForm we can use it as an alias to acces all filds of our form
  // this is more easy and shourt ;)
  get taskF(){
    return this.taskForm.controls;
  } 

}
