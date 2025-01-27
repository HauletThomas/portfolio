import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query('a', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))])
        ])
      ])
    ])
  ]
})
export class ContactComponent {
  constructor(private titleService: Title){
    this.titleService.setTitle('Thomas Haulet - Contact');
  }
  links = [
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/thomas-haulet-9b2055258/',
      icon: './assets/linkedin.png'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/HauletThomas',
      icon: './assets/github.png'
    }
  ];
}
