import { Component, Inject, inject } from '@angular/core';
import { CommonModule} from '@angular/common'
import {DialogRef, DIALOG_DATA} from '@angular/cdk/dialog'
import { faClose, faCheckToSlot, faBars, faUser, faTag, faCheckSquare,faClock} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BtnComponent } from "../btn/btn.component";
import {ToDo} from '../../models/todo.model'

interface InputData{
  todo: ToDo;
}

interface outputData{
  rta:boolean;
}

@Component({
  selector: 'app-todo-dialog',
  standalone: true,
  imports: [CommonModule, BtnComponent,FontAwesomeModule],
  templateUrl: './todo-dialog.component.html'
})
export class TodoDialogComponent {

  todo: ToDo;

  constructor(
    private dialogRef: DialogRef<outputData>,
    @Inject(DIALOG_DATA) data: InputData
  ){
    this.todo = data.todo;
  }

  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare= faCheckSquare;
  faClock = faClock;

  close(){
    this.dialogRef.close()
  }

  closeWithRta(rta: boolean){
    this.dialogRef.close({rta});
  }
}
