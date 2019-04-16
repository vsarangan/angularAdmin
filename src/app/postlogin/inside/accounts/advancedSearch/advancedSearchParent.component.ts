import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advancedSearchParent',
  templateUrl: './advancedSearchParent.component.html',
  styleUrls: ['./advancedSearchParent.component.css']
})
export class AdvancedSearchParentComponent implements OnInit {
  advancedData;
  advancedData1;
  FinalDataResult;
  selectOption = [{ value: 'chennai', label: 'Chennai' }, { value: 'trichy', label: 'Trichy' }];
  Country = [{ value: 'india', label: 'India' }, { value: 'singapore', label: 'Singapore' }];
  constructor() { }

  ngOnInit(): void {
    this.advancedData = [
      { key: 'name', name: 'Name', type: 'text', placeholder: 'Name', allowMultiple: true, value: 'saranagn', minlength: '5', maxlength: '10', pattern: '^[a-zA-Z0-9_ ]+$' },
      { key: 'city', name: 'City', type: 'dropdown', placeholder: 'City', restrictToSuggestedValues: false, suggestedValues: this.selectOption, value: 'chennai' },
      { key: 'email', name: 'E-Mail', type: 'text', placeholder: 'E-Mail', allowMultiple: true, pattern: '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' },
      { key: 'country', name: 'Country', type: 'dropdown', placeholder: 'Country', restrictToSuggestedValues: false, suggestedValues: this.Country },
    ];
    this.advancedData1 = [
      { key: 'name', name: 'Name', type: 'text', placeholder: 'Name', allowMultiple: true, value: 'saranagn', minlength: '5', maxlength: '10', pattern: '^[a-zA-Z0-9_ ]+$' },
      { key: 'city', name: 'City', type: 'dropdown', placeholder: 'City', restrictToSuggestedValues: false, suggestedValues: this.selectOption, value: 'chennai' },
      { key: 'email', name: 'E-Mail', type: 'text', placeholder: 'E-Mail', allowMultiple: true, pattern: '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' },
      { key: 'country', name: 'Country', type: 'dropdown', placeholder: 'Country', restrictToSuggestedValues: false, suggestedValues: this.Country },
    ];
  }
  getFinalResult(data) {
    this.FinalDataResult = data;
  }
}
