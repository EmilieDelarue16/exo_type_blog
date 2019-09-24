import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

    @Input() title: string;
    @Input() content: string;
    loveIts = 0;
    createAt = new Date();

  constructor() { }

  ngOnInit() {
  }
}
