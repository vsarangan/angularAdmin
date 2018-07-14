import { Component, OnInit, ViewChild, OnChanges, Input, DoCheck} from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { DataprocessService } from './../../../../layout/dataprocess.service';
// import { single, multi } from './data';
@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.css']
})
export class InsightsComponent implements OnInit, DoCheck {
  rows;
  temp;
  hoverBox = false;
  @ViewChild('tableWrapper') tableWrapper;
  @ViewChild(DatatableComponent) table: DatatableComponent;
  private currentComponentWidth;
  single = [];
  showchart = false;
  view: any[] = [600, 200];

  // options
  showLegend = true;

  colorScheme = {
    domain: ['#6ab344', '#00aeef', '#ffcc00', '#e91e63']
  };

  // pie
  showLabels = false;
  explodeSlices = false;
  doughnut = false;

  constructor(private datasource: DataprocessService) {
    this.datasource.getinsights().subscribe(data => {
      this.rows = data;
      this.temp = data;
      this.single = this.rows;
      this.showchart = true;
    });
  }
  ngOnInit() {
    this.single = this.rows;
  }
  onSelect(event) {
   // console.log(event);
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
  //  console.log(data);
  }
  delete(data) {
 //   console.log(data);
  }
  send(data) {
  //  console.log(data);
  }
  ngDoCheck() {
    if (this.table && this.table.recalculate && (this.tableWrapper.nativeElement.clientWidth !== this.currentComponentWidth)) {
      this.currentComponentWidth = this.tableWrapper.nativeElement.clientWidth;
      this.table.recalculate();
      window.dispatchEvent(new Event('resize'));
    }
  }
}
