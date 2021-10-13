import { Component, OnInit } from '@angular/core';
import {Todo} from './../../models/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];
  intodo:string = "";
  constructor() { }

  ngOnInit(): void {
this.todos = [

]
  }
toggledone(index:number){
this.todos.map((v,i)=> {
  if(i==index) v.completed = !v.completed;
return v;
})
}
deleteTodo(index:number){
  this.todos=this.todos.filter((v,i)=> i !== index);
}
addTodo(){
  this.todos.push({
    content: this.intodo,
    completed: false
  })
  this.intodo="";
}
}
