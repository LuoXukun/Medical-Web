import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styles: [
    `
      form {
        font-size: 20px;
        margin-top: 50px;
      }
    `
  ]
})
export class AuthorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
