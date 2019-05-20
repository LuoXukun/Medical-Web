import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
      .container.container-middle {
        text-align: center;
      }
      .icon-container {
        font-family: Glyphicons Halflings;
        margin-top: 50px;
      }
      .icon-container div span {
        font-size: 100px;
        color: rgb(100, 100, 255);
        text-align: center;
      }
      .icon-container div span:hover {
        color: rgb(50, 50, 255);
        cursor: pointer;
      }
    `
  ]
})
export class HomeComponent implements OnInit {

  @Output() homeEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  /**
   * 点击跳转至相应界面
   */
  jumpOut(input: number):void {
    this.homeEvent.emit(input);
  }

}
