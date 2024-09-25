import { Component } from '@angular/core';
import {DragDropModule, CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop'
import {CommonModule} from '@angular/common'
import { NavbarComponent } from "../../components/navbar/navbar.component";
import {ToDo} from '../../models/todo.model'


@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, DragDropModule, NavbarComponent],
  templateUrl: './board.component.html',
  styles:[
    `
    /* Animate items as they're being sorted. */
    .cdk-drop-list-dragging .cdk-drag {
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }

    /* Animate an item that has been dropped. */
    .cdk-drag-animating {
      transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
    }
    `
  ]
})
export class BoardComponent {

  todos: ToDo[] =[
    {
      id: '1',
      title: 'Task 1'
    },
    {
      id: '2',
      title: 'Task 2'
    },
    {
      id: '3',
      title: 'Task 3'
    }
  ]

  doing: ToDo[] = [
    {
      id: '4',
      title: 'Task 4'
    },
    {
      id: '5',
      title: 'Task 5'
    },{
      id: '6',
      title: 'Task 6'
    }
  ];

  done: ToDo[] = [
    {
      id: '7',
      title: 'Task 7'
    },
    {
      id: '8',
      title: 'Task 8'
    },{
      id: '9',
      title: 'Task 9'
    }
  ];


  drop(event: CdkDragDrop<ToDo[]>){
    if (event.previousContainer === event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else{
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      )
    }
  }
}
