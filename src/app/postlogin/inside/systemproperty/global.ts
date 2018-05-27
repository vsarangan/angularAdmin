import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable()
export class Globals {
  valueofelement = [];
  public totalelement = [];
  public hiddenfield ;
  public passwordmaintain;
  public numberonly;
  public commonvalue;
  public autosend;
  public specifictakeonly;
  public numbers;
  public ojectval = {};
  newdata;
  public mappedelement = [];
  public pushdata;
  regex;
  groups = {};
  @Output() optData = new EventEmitter<any>();
  keycontrolservice(e) {
    if (e.target.value !== '') {
      this.specifictakeonly = this.specifictake(e);
      if (this.specifictakeonly.length <= e.target.maxLength) {
        e.target.value = this.specifictakeonly;
      }
    } else {
      e.target.value = this.specifictake(e);
    }
  }

  specifictake(e) {
    this.regex = new RegExp(e.target.accept, 'g');
    this.specifictakeonly = e.target.value.replace(this.regex, '');
    return this.specifictakeonly;
  }
 userchoosedidentify(data) {
     return this.totalelement.filter(element => element.nativeElement.id === data);
  }
//  toObject() {
//    this.mappedelement = [];
//    for (var i = 0; i < this.totalelement.length; i++) {
//      const label = this.totalelement[i].nativeElement.id;
//      const data = this.totalelement[i];
//      this.mappedelement.push({ name: label, element : data});
//    }
//    this.objgroup();
// }

//   objgroup() {
//     this.groups = {};
//     console.log(this.mappedelement);
//     for (var i = 0; i < this.mappedelement.length; i++) {
//       const name = this.mappedelement[i].name;
//       if (!this.groups[name]) {
//         this.groups[name] = [];
//       }
//       this.groups[name].push(this.mappedelement[i].element);
//     }
//     console.log(this.groups);
//   }
  checkautosend(data) {
    this.autosend = this.totalelement[0].nativeElement.parentElement.id;
  //  if (this.autosend === 'autosubmitenable') {
    this.beforesendservercheck(data); // enable na send to check the all filled or not
  //  }
  }

  beforesendservercheck(data) {
    this.valueofelement = [];
    const datafilter = this.userchoosedidentify(data);
    datafilter.forEach((element, i) => {
          if (element.nativeElement.children[0].type) {
            if (element.nativeElement.children[0].value !== '') {
              this.valueofelement.push(element.nativeElement.children[0].value);
              if (this.valueofelement.length === datafilter.length) {
                console.log('meet  :)  ------>'); // meet the user value
                this.datasendtoserver(this.valueofelement);
              }
            } else {
              const finalvalue = ''; // send to server
              console.log('not meet');
              this.optData.emit(finalvalue);
            }
          }
    });
  }

  datasendtoserver(data) {
    const finalvalue = data.join(''); // send to server
    console.log(finalvalue);
    this.optData.emit(finalvalue);
  }
}
