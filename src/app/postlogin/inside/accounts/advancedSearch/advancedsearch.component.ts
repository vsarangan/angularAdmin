import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { Params } from '@angular/router';
import { Component, OnInit, ViewChild, Renderer, Renderer2, ElementRef, HostListener } from '@angular/core';
import { IsUnsedParameterPipe } from './isUnsedParameter.pipe';
import { SSL_OP_ALL } from 'constants';
import { DialogService } from '../../../../services/dialog.service';
import { Observable } from 'rxjs';

export interface OptionLists {
  key: string;
  name: string;
  type?: string;
  minlength?: string;
  maxlength?: string;
  placeholder?: string;
  allowMultiple?: boolean;
  suggestedValues?: Array<any>;
  restrictToSuggestedValues?: boolean;
  index?: number;
  value?: string;
  option?: string;
  pattern?: string;
}
@Component({
  selector: 'app-advancedsearch',
  templateUrl: './advancedsearch.component.html',
  styleUrls: ['./advancedsearch.component.css']
})
export class AdvancedSearchComponent implements OnInit {
  focus = false;
  form: FormGroup;
  searchPlaceholder = 'Search Advanced';
  parametersLabel = 'Parameter Suggestions';
  parameters: OptionLists[];
  searchParams = [];
  changeBuffer = [];
  searchQuery = '';
  totalAllowmultiple = [];
  finalResult: any = {};
  count = 0;
  selectOption = [{ value: 'chennai', label: 'Chennai' }, { value: 'trichy', label: 'Trichy' }];
  Country = [{ value: 'india', label: 'India' }, { value: 'singapore', label: 'Singapore' }];
  parametersTemp: any;
  constructor(private renderer: Renderer, private el: ElementRef, private isUnused: IsUnsedParameterPipe, private fb: FormBuilder, private dgservice: DialogService) {
  }
  ngOnInit(): void {
    this.parameters = [
      { key: 'name', name: 'Name', type: 'text', placeholder: 'Name', allowMultiple: true, value: 'saranagn', minlength: '5', maxlength: '10', pattern: '^[a-zA-Z0-9_ ]+$' },
      { key: 'city', name: 'City', type: 'dropdown', placeholder: 'City', restrictToSuggestedValues: false, suggestedValues: this.selectOption, value: 'chennai' },
      { key: 'email', name: 'E-Mail', type: 'text', placeholder: 'E-Mail', allowMultiple: true, pattern: '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' },
      { key: 'country', name: 'Country', type: 'dropdown', placeholder: 'Country', restrictToSuggestedValues: false, suggestedValues: this.Country},
    ];
    this.form = this.fb.group({
      searchQuery: ['']
    });
    this.parameters.forEach(item => {
      if (item.allowMultiple) {
        this.totalAllowmultiple.push(item.key);
      }
    });
    this.parametersTemp = this.parameters;
  }
  controlVisibility(searchParam) {
   const dddd = this.parameters.filter(param => param.key !== searchParam.key );
  }
  addSearchParam(searchParam, value, enterEditModel) {
    if (enterEditModel === undefined) {
      enterEditModel = true;
    }
    if (!this.IsUnsedParameter(searchParam)) {
      return;
    }
    let nameControl = '';
    let internalIndex = 0;
    if (searchParam.allowMultiple) {
      internalIndex = this.searchParams.filter(data => data.key === searchParam.key).length;
      nameControl = searchParam.key + this.searchParams.length;
    } else {
      nameControl = searchParam.key;
    }

    const newIndex =
      this.searchParams.push({
        key: searchParam.key,
        formFieldname: nameControl,
        name: searchParam.name,
        type: searchParam.type || 'text',
        placeholder: searchParam.placeholder,
        allowMultiple: searchParam.allowMultiple || false,
        suggestedValues: searchParam.suggestedValues || [],
        restrictToSuggestedValues: searchParam.restrictToSuggestedValues || false,
        index: internalIndex,
        value: searchParam.value || '',
        minlength: searchParam.minlength || '',
        maxlength: searchParam.maxlength || '',
        pattern: searchParam.pattern || ''
      }) - 1;
 //  this.parametersTemp = this.controlVisibility(searchParam);
    this.form.addControl(nameControl, new FormControl(searchParam.value, Validators.required));
    this.updateModel('add', searchParam.key, internalIndex, value);
  }
  updateModel(command, key, index, value) {
    this.changeBuffer.push({
      command: command,
      key: key,
      index: index,
      value: value
    });
    this.changeBuffer.forEach((element, i) => {
      const searchParam = this.parameters.filter(param => param.key === key)[0];
      console.log('searchParam', searchParam);
    });
  }

  IsUnsedParameter(value) {
    return this.searchParams.filter(param => param.key === value.key && !param.allowMultiple).length === 0;

  }
  appFocusinput(element) {
    element.target.focus();
  }
  removeSearchParam(index) {
    if (index !== -1) {
      const formRemove = this.searchParams[index];
      this.form.removeControl(formRemove.formFieldname);
      this.searchParams.splice(index, 1);
    }
  }
  leaveEditMode(element, index) {
    if (index === undefined) {
      return;
    }
    const searchParam = this.searchParams[index];
    searchParam.editMode = false;
    if (element.target.localName !== 'mat-select') {
      if (!element.target.value) {
        this.removeSearchParam(index);
      }
    }

  }
  allowEditMode(element, index) {

  }
  keyUpEventTrigger(element) {
    const codeData = element.code;
    if (codeData === 'Enter' || codeData === 'NumpadEnter') {
      return false;
    }
  }
  removeAll() {
    this.searchParams = [];
    this.form = this.fb.group({
      searchQuery: ['']
    });
  }
  isKeyExists(value) {
    return this.totalAllowmultiple.filter(param => value.startsWith(param) ? true : false);

  }
  hasKey(object, key) {
    return object ? Object.hasOwnProperty.call(object, key) : false;
  }
  formSubmit(formdata) {
    this.finalResult = {};
    const values = formdata.value;
    // tslint:disable-next-line:forin
    for (const data in values) {
      const datas = this.isKeyExists(data);
      if (datas.length !== 0) {
        if (Object.keys(this.finalResult).length === 0) {
          this.finalResult[datas[0]] = [values[data]];
        } else {
          const dddd = datas[0];
          if (this.hasKey(this.finalResult, dddd)) {
            this.finalResult[datas[0]].push(values[data]);
          } else {
            this.finalResult[datas[0]] = [values[data]];
          }
        }
      } else {
        this.finalResult[data] = values[data];
      }
    }
  }



}
