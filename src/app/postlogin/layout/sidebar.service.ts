import { Component, Injectable, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class SideBarService {
  @Output() notificationside: EventEmitter<any> = new EventEmitter();
  @Output() appsside: EventEmitter<any> = new EventEmitter();
  firstside = [
    {
      icon: 'apps',
      sidename: 'sidebar.apps',
      link: 'dashboard/apps'
    },
    {
      icon: 'dashboard',
      sidename: 'sidebar.dashboard',
      link: 'dashboard/dashprop'
    },
    {
      icon: 'fiber_new',
      sidename: 'sidebar.newapp',
      link: 'dashboard/newApp'
    },
    {
      icon: 'done_all',
      sidename: 'sidebar.stepper',
      link: 'dashboard/stepper'
    }
  ];
  secondside = [
    {
      icon: 'account_circle',
      sidename: 'sidebar.usermanagement',
      link: 'dashboard/usermanagement'
    },
    {
      icon: 'settings',
      sidename: 'sidebar.systemproperty',
      link: 'dashboard/systemproperty'
    }
  ];
  thirdside = [
    {
      icon: 'apps',
      sidename: 'sidebar.apps',
      link: 'dashboard/apps'
    },
    {
      icon: 'add_alert',
      sidename: 'sidebar.notification',
      link: 'dashboard/notification'
    },
    {
      icon: 'alarm',
      sidename: 'sidebar.scheduler',
      link: 'dashboard/scheduler'
    }
  ];
  fourthside = [
    {
      icon: 'settings',
      sidename: 'sidebar.setting',
      link: 'dashboard/setting'
    },
    {
      icon: 'style',
      sidename: 'sidebar.insightsreport',
      link: 'dashboard/insights'
    }
  ];
  apps = [this.firstside, this.secondside];
  notification = [this.thirdside, this.fourthside];

  constructor(private http: HttpClient) {
  }

  onClick() {
    this.notificationside.emit(this.notification);
  }
  appsclick() {
    this.appsside.emit(this.apps);
  }

}
