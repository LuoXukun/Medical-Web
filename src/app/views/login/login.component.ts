import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  @Output() loginEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  /**
   * 点击跳转注册界面
   */
  goRegister():void {
    this.loginEvent.emit(6);
  }

}
