import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../_models/Projects';
import {ModalModule} from 'ngx-bootstrap/modal';



@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, ModalModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent{

  @Input() projects = {} as Project[];

}
