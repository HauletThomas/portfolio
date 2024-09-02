import { Injectable } from '@angular/core';
import { Project } from '../_models/Projects';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id: 0,
    name: 'Project PHP for a ASBL',
    summary: '2nd year project',
    description: 'Project for a non-profit organization, making appointments, several roles, recording payments list of activities, sessions, participation',
    projectLink: "",
    pictures: ['../assets/angPica4.PNG'],
    tags: [Tag.PHP, Tag.CSS, Tag.HTML, Tag.MVC, Tag.JS]
  },{id: 1,
    name: 'Intership Project',
    summary: 'Dashboard using d3.js',
    description: 'Visualization and supervision of a data management and processing system.',
    projectLink: "",
    pictures: ['../assets/angPica4.PNG'],
    tags: [Tag.ANGULAR, Tag.REST, Tag.JSON, Tag.HTML, Tag.CSS]
  },{id: 2,
    name: 'First PHP project',
    summary: 'WWE showcase site',
    description: 'Site for the history of the WWE, show the PLEs, show the champions and be able to change them by being admin, a forum to exchange, and registration',
    projectLink: "",
    pictures: ['../assets/angPica4.PNG'],
    tags: [Tag.HTML, Tag.PHP, Tag.CSS]
  },{id: 3,
    name: 'Java App, HELHa help',
    summary: '3nd year project',
    description: 'Site for helha students to be able to exchange documents and discuss different subjects. An admin party for the moderation of all the site',
    projectLink: "",
    pictures: ['../assets/angPica4.PNG'],
    tags: [Tag.JAVA, Tag.ANGULAR, Tag.CSS]
  },
  ]

  constructor() { }

  GetProjects(){
    return this.projects;
  }

  GetProjectById(id: number): Project {
    let project = this.projects.find(p => p.id === id);
    if(project === undefined){
      throw new TypeError("Id not found: " + id);
    }
    return project;
  }
}
