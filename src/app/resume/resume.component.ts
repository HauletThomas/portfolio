import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  constructor(private titleService: Title, private renderer: Renderer2){
    this.titleService.setTitle('Thomas Haulet - Resume');
  }

  DownloadFile(){
    const link = this.renderer.createElement('a');
    link.setAttribute('target','_blank');
    link.setAttribute('href','../../assets/CVThomasHaulet.pdf');
    link.setAttribute('download','CVThomasHaulet.pdf');
    link.click();
    link.remove();
  }
}
