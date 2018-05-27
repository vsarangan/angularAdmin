import { Router } from '@angular/router';
import { SideBarService } from './../../../layout/sidebar.service';
import { element } from 'protractor';
import { Component, OnInit, ViewChild, Renderer, Renderer2, ElementRef, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DialogService } from '../../../../services/dialog.service';
import { Observable } from 'rxjs/Observable';
import { Element } from '@angular/compiler';
import { OTPComponent } from '../../systemproperty/otp.component';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit  {
  firstside = [
    {
      icon: 'apps',
      sidename: 'sidebar.apps',
      link: 'apps'
    },
    {
      icon: 'dashboard',
      sidename: 'sidebar.dashboard',
      link: 'dashprop'
    },
    {
      icon: 'fiber_new',
      sidename: 'sidebar.newapp',
      link: 'newApp'
    },
    {
      icon: 'done_all',
      sidename: 'sidebar.stepper',
      link: 'stepper'
    },
    {
      icon: 'account_circle',
      sidename: 'sidebar.usermanagement',
      link: 'usermanagement'
    },
    {
      icon: 'settings',
      sidename: 'sidebar.systemproperty',
      link: 'systemproperty'
    },
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
    },
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

  constructor(private router: Router) {

  }
  ngOnInit(): void {
  }

}
