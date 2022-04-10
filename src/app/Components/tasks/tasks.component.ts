import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskService } from '../../Service/task.service';
import { Task } from '../../Task';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
tasks:Task[]=[];

  constructor(
    private taskService:TaskService
  ) { 

  }

  ngOnInit(): void {
   this.taskService.getTasks().subscribe(tasks =>[
     this.tasks=tasks
   ]);
  }
  DeleteTask(task:Task){
    this.taskService.DeleteTask(task).subscribe(() => [
      this.tasks = this.tasks.filter(t=>t.id !=task.id)
    ])
  }

  toggleReminder(task:Task){
task.reminder=!task.reminder
this.taskService.updateTaskReminder(task).subscribe();
console.log(task.reminder)
  }

  addTask(task:Task){
    this.taskService.addTask(task).subscribe((task) =>[
      this.tasks.push(task)
    ]);
  }
}
