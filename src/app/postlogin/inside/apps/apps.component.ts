import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SideBarService } from './../../layout/sidebar.service';
@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit {

  apps = [
    {
      appId: '1',
      appName: 'TENS App Demo',
      appDesc: 'DEMO APP',
      appCreatedBy: 'sarangan',
      link: 'notification'
    },
    {
      appId: '2',
      appName: 'Web Push Account',
      appDesc: 'DEMO Web APP',
      appCreatedBy: 'sarangan',
      link: 'notification'
    },
    {
      appId: '1',
      appName: 'TENS App Demo',
      appDesc: 'DEMO APP',
      appCreatedBy: 'sarangan',
      link: 'notification'
    }, {
      appId: '1',
      appName: 'TENS App Demo',
      appDesc: 'DEMO APP',
      appCreatedBy: 'sarangan',
      link: 'notification'
    },
    {
      appId: '2',
      appName: 'Web Push Account',
      appDesc: 'DEMO Web APP',
      appCreatedBy: 'sarangan',
      link: 'notification'
    },
    {
      appId: '1',
      appName: 'TENS App Demo',
      appDesc: 'DEMO APP',
      appCreatedBy: 'sarangan',
      link: 'notification'
    },
    {
      appId: '2',
      appName: 'Web Push Account',
      appDesc: 'DEMO Web APP',
      appCreatedBy: 'sarangan',
      link: 'notification'
    },
    {
      appId: '1',
      appName: 'TENS App Demo',
      appDesc: 'DEMO APP',
      appCreatedBy: 'sarangan',
      link: 'notification'
    },
    {
      appId: '2',
      appName: 'Web Push Account',
      appDesc: 'DEMO Web APP',
      appCreatedBy: 'sarangan',
      link: 'notification'
    },
    {
      appId: '1',
      appName: 'TENS App Demo',
      appDesc: 'DEMO APP',
      appCreatedBy: 'sarangan',
      link: 'notification'
    }
  ];
  constructor(private router: Router, private sidebar: SideBarService) {
    sidebar.appsclick();
  }

  ngOnInit() {
  }

  notificationmanager(data) {
    const path = 'dashboard/' + data.link;
    this.router.navigate([path]);
  }
}
