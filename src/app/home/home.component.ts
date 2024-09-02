import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/Projects';
import { SliderComponent } from "../slider/slider.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  projects = {} as Project[];

  constructor(private titleService: Title, private projectsService: ProjectsService){
    this.titleService.setTitle('Thomas Haulet - Home');
  }

  ngOnInit(): void {
    this.projects = this.projectsService.GetProjects();
  }

}
