import { SchedulerComponent } from './../../inside/profile/scheduler/scheduler/scheduler.component';
import { Router, NavigationEnd } from '@angular/router';
import { Element } from '@angular/compiler';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit, ViewChild, ElementRef, Renderer, Renderer2, Inject } from '@angular/core';
import { PerfectScrollbarModule, PerfectScrollbarComponent } from 'ngx-perfect-scrollbar';
import { TranslateService } from '@ngx-translate/core';
import { ObservableMedia } from '@angular/flex-layout';
import { Meta, DOCUMENT } from '@angular/platform-browser';
import { MatSidenav } from '@angular/material';
import { Subject } from 'rxjs';
import { SampleService } from 'library';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [SchedulerComponent],
})
export class DashboardComponent implements OnInit {
  @ViewChild(PerfectScrollbarComponent) perfectscroll: PerfectScrollbarComponent;
  @ViewChild('sidenav') public sidenav: MatSidenav;
  @ViewChild(SchedulerComponent) datassss;
  selectedItem;
  childdata;
  themeapply = 'theme1';
  icon;
  data;
  // sidemenuclass = 'unfolded';
  // sidecontentclass = '';
  theme = [
    {
      color: 'purple',
      active: 'A',
      property: 'theme1'
    },
    {
      color: 'yellow',
      active: 'A',
      property: 'theme2'
    },
    {
      color: 'green',
      active: 'A',
      property: 'theme3'
    },
    {
      color: 'red',
      active: 'A',
      property: 'theme4'
    }
  ];
  config = '';
  constructor(@Inject(DOCUMENT) document, private _element: ElementRef,
   public translate: TranslateService, public media: ObservableMedia, public userauth: AuthService, private meta: Meta, private renderer: Renderer2, private router: Router, private sched: AuthService, private singletonServ: SampleService ) {
    translate.use('en');
    this.sched.messageSource.subscribe(value => {
      this.childdata = value;
  //    console.log('emeiiee', this.childdata);
    });
  }



  ngOnInit() {
    console.log(this.singletonServ.get('appid'));
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }

     this.perfectscroll.directiveRef.scrollTo(0, 0);
    });
 //   console.log(this.datassss);
  }


  addclassactive(data) {
  //  console.log(data);
    this.selectedItem = data;
    this.icon = data.active;
    this.themeapply = data.property;
    // this.renderer.addClass(document.body, this.themeapply);
    this.meta.updateTag({ name: 'theme-color', content: data.color });
  }

  isLargeScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width > 720) {
      return true;
    } else {
      return false;
    }
  }
  logoutuser() {
    this.userauth.clearState();
  }
  sidenavtoggle() {
    this.sidenav.toggle();
    // if (this.sidemenuclass === 'unfolded') {
    //   this.sidemenuclass = 'folded';
    //   this.sidecontentclass = 'contentcustom';
    // } else {
    //   this.sidemenuclass = 'unfolded';
    //   this.sidecontentclass = '';
    // }

  }
//   increase(data) {
// console.log('enter', data);
//     let check = data.target.classList;
//     if (check) {
//       if (check.contains('folded')) {
//         this.sidemenuclass = 'folded unfolded';
//       } else {
//        // this.sidemenuclass = 'unfolded';
//       }
//     }
//   }
//   decrease(data) {
//     console.log('leave', data);
//     let check = data.target.classList;
//     if (check) {
//       if (check.contains('unfolded') && check.contains('folded')) {
//         this.sidemenuclass = 'folded';
//       } else {
//         // this.sidemenuclass = 'unfolded';
//       }
//     }
//   }
  dataclickfn1() {
    if (this.childdata !== undefined) {
      this.childdata.nativeElement.click();
    }
  }
  changeOfRoutes() {
    //  history.pushState(null, null, location.href);
    // window.location.href += '#';
    // const _hash = '!';
    // // making sure we have the fruit available for juice (^__^)
    // window.setTimeout(function () {
    //   window.location.href += '!';
    // }, 50);
    // window.onhashchange = function () {
    //   if (window.location.hash !== _hash) {
    //     window.location.hash = _hash;
    //   }
    // };
  }

}
