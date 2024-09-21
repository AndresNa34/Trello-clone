import { Component, OnInit, signal } from '@angular/core';
import { CommonModule} from '@angular/common'
import { BtnComponent } from "../btn/btn.component";
import {OverlayModule} from '@angular/cdk/overlay';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BtnComponent, CommonModule, OverlayModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  isOpen = true;

}


