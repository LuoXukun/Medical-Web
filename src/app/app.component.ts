import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  /**
   * active 表示导航栏中用户所选选项，默认为1
   * 1 --> 首页：医学问答系统
   * 2 --> 用户提问
   * 3 --> 问题实例
   * 4 --> 作者信息
   */
  public active: number;
  public question: string;

  constructor() {}

  ngOnInit() {
    this.active = 1;
    this.question = '';
  }

  /**
   * 检查active的值
   */
  checkActive(input:number):boolean {
    return this.active == input;
  }

  /**
   * 修改active的值
   */
  modifyActive(input:number):void {
    if(this.active != input) {
      this.active = input;
      this.question = '';
    }
    console.log(this.active);
  }

  /**
   * 从问题实例跳转到用户提问
   * @param item : 问题内容 
   */
  askQuestion(item:string):void {
    this.question = item;
    this.active = 2;
    console.log("app.question: ", this.question);
  }
}
