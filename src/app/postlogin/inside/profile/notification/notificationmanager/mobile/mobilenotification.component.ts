import { Component, OnInit, ViewChild, ChangeDetectorRef, Renderer, ElementRef,  } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { SideBarService } from '../../../../../layout/sidebar.service';
import { DataprocessService } from '../../../../../layout/dataprocess.service';
import { SidebarComponent } from '../../../../../layout/sidebar/sidebar.component';
@Component({
  selector: 'app-mobilenotification',
  templateUrl: './mobilenotification.component.html',
  styleUrls: ['./mobilenotification.component.css'],
  providers: []
})
export class MobileNotificationComponent {
  rows;
  temp;
  hoverBox = false;
  @ViewChild('tableWrapper') tableWrapper;
  @ViewChild(DatatableComponent) table: DatatableComponent;
  private currentComponentWidth;

  constructor(private sidebar: SideBarService, private datafetch: DataprocessService, private changeDetectorRef: ChangeDetectorRef, private renderer: Renderer) {
    this.datafetch.getPosts().subscribe(data => {
      this.rows = data;
      this.temp = data;
      sidebar.onClick();
    });

  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
  }
  edit(data) {
   // console.log(data);
  }
  delete(data) {
  //  console.log(data);
  }
  send(data) {
   // console.log(data);
  }


  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewChecked() {
    // Check if the table size has changed,

  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngDoCheck() {
    if (this.table && this.table.recalculate && (this.tableWrapper.nativeElement.clientWidth !== this.currentComponentWidth)) {
      this.currentComponentWidth = this.tableWrapper.nativeElement.clientWidth;
      this.table.recalculate();
      window.dispatchEvent(new Event('resize'));
  }
}
}
