import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  ageForm: FormGroup;
  age: number;

  constructor(private _formBuilder: FormBuilder) {
    this.ageForm = this._formBuilder.group({
      'age': ['']
    });
  }

  ngOnInit() {
  }

  onFormSubmit() {

  }
}
