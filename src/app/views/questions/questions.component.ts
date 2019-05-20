import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QUESTION_TYPES, QUESTION_LIST } from './questions.info';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  public question_types: string[];
  public question_list: string[][];
  public question_show: boolean[];

  @Output() questionsEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.question_types = QUESTION_TYPES;
    this.question_list = QUESTION_LIST;
    this.question_show = [false, false, false, false, false, false];
  }

  /**
   * 折叠或张开card
   * @param index : 点击card的序号
   */
  toggle(index: number): void {
    console.log(index);
    this.question_show[index] = this.question_show[index] ? false : true;
    console.log(this.question_show);
  }

  /**
   * 跳转到问题界面
   * @param item : 问题内容
   */
  ask_question(item: string): void {
    this.questionsEvent.emit(item);
  }

}
