import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styles: [
    `
      .container.container-middle {
        text-align: center;
      }

      button {
        width: 100%;
      }

      .question-container {
        padding-top: 50px;
        padding-bottom: 50px;
      }

      .answer-container {
        padding-top: 50px;
      }
    `
  ]
})
export class AskQuestionComponent implements OnInit {

  public answer: any;
  public quesPost: object;
  @Input() public question: string;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.answer = '';
    this.quesPost = {};
    console.log("ask.question:", this.question);
  }

  search():void {
    this.quesPost = {"question": this.question};
    console.log(this.quesPost);
    this.httpService.post<any>('research', this.quesPost)
    .subscribe( (res) => {
      console.log(res);
      this.answer = res.data;
    });
  }

}
