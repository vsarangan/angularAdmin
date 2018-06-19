import { DashboardComponent } from './../dashboard/dashboard.component';
import { Component, OnInit, DoCheck, ViewChild } from '@angular/core';
import { NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AppoperationComponent, NewAppComponent, DeleteAppComponent  } from '../../inside/apps/appoperation/appoperation.component';
import { SideBarService } from './../sidebar.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, DoCheck {
  firstside = [];
  secondside = [];
  // firstside = [
  //   {
  //     icon: 'dashboard',
  //     sidename: 'Dashboard',
  //     link: 'dashboard/apps'
  //   },
  //   {
  //     icon: 'fiber_new',
  //     sidename: 'New App',
  //     link: 'dashboard/newApp'
  //   },
  //   {
  //     icon: 'done_all',
  //     sidename: 'Stepper ',
  //     link: 'dashboard/stepper'
  //   }
  // ];
  userinfo;
  activatemenu = this.firstside[0];
  // secondside = [
  //   {
  //     icon: 'account_circle',
  //     sidename: 'User Management',
  //     link: 'dashboard/usermanagement'
  //   },
  //   {
  //     icon: 'settings',
  //     sidename: 'System Property',
  //     link: 'dashboard/systemproperty'
  //   }
  // ];
  constructor(private router: Router, private translate: TranslateService, public dialog: MatDialog, private routedata: ActivatedRoute, private Sideservice: SideBarService, private dash: DashboardComponent) {
      this.Sideservice.notificationside.subscribe(
      (lang) => {
        this.firstside = lang[0];
        this.activatemenu = this.firstside[1];
        this.secondside = lang[1];
      }
    );
    this.Sideservice.appsside.subscribe(
      (lang) => {
        this.firstside = lang[0];
        this.activatemenu = this.firstside[0];
        this.secondside = lang[1];
      }
    );
  }
  ngOnInit() {
    this.firstside = this.Sideservice.firstside;
    this.activatemenu = this.firstside[0];
    this.secondside = this.Sideservice.secondside;
    this.userinfo = this.routedata.snapshot.data;
  }
  routePage(data) {
    if (this.dash.sidenav.mode === 'over') {
      this.dash.sidenav.toggle();
    }
    this.activatemenu = data;
    this.router.navigate([data.link]);
  }

  openDialog() {
    const dialogRef = this.dialog.open(NewAppComponent, {
      height: '500px',
      width: '800px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
   ngDoCheck() {

   }
  onside(data) {
  }


}
