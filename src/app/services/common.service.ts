import { Injectable } from '@angular/core';
@Injectable()
export class CommonService {
public  scrollReset() {
    const contentContainer = document.querySelector('.mat-sidenav-content');
    contentContainer.scrollTop = 0;
  }
}
