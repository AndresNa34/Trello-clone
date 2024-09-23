import { Component, OnInit, signal } from '@angular/core';
import { CommonModule} from '@angular/common'
import { BtnComponent } from "../btn/btn.component";
import {OverlayModule} from '@angular/cdk/overlay';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import {faBell, faInfoCircle} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BtnComponent, CommonModule, OverlayModule,FontAwesomeModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  isOpen = false;
  faBell = faBell;
  faInfoCircle = faInfoCircle;

}


