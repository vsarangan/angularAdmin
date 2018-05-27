import { Injectable } from '@angular/core';

import { QuestionBase } from './question-base';

@Injectable()
export class QuestionService {

  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getQuestions() {

    const questions = [
      {
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1,
        controlType: 'textbox'
      },
      {
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2,
        controlType: 'textbox'
      }
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
