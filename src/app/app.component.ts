import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elit dui, cursus non rutrum vel, interdum eget quam.',
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elit dui, cursus non rutrum vel, interdum eget quam.',
    },
    {
      title: 'Un autre post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elit dui, cursus non rutrum vel, interdum eget quam.',
    },
  ];
}


