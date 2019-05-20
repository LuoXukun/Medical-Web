import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  @Output() registerEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  /**
   * 点击跳转登陆界面
   */
  goLogin():void {
    this.registerEvent.emit(5);
  }

}
