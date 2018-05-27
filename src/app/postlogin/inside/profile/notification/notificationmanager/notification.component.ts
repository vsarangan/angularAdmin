import { TriggerDirective } from './../../../../../directives/trigger.directive';
import { Component, OnInit, ViewChild, ChangeDetectorRef, Renderer, ElementRef,  } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  providers: []
})
export class NotificationComponent implements OnInit {

  routeLinks: any[];
  activeLinkIndex = -1;
  activeParent;
  constructor(private router: Router) {
    this.routeLinks = [
      {
        label: 'Mobile',
        link: './mobilenotification',
        index: 0,
        icons: 'stay_current_portrait'
      }, {
        label: 'Web',
        link: './webnotification',
        index: 1,
        icons: 'web'
      }, {
        label: 'Email',
        link: './emailnotification',
        index: 2,
        icons: 'email'
      }, {
        label: 'SMS',
        link: './smsnotification',
        index: 3,
        icons: 'sms'
      }, {
        label: 'Social Media',
        link: './socialnotification',
        index: 4,
        icons: 'public'
      }
    ];

  }
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }
  FunCalled(data) {
    console.log('data', data);
  }
}
