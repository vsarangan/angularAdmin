import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DialogService } from '../../../services/dialog.service';
import { Observable } from 'rxjs/Observable';
import { single, multi } from './data';
import { GridsterComponent, IGridsterOptions, IGridsterDraggableOptions } from 'angular2gridster';
@Component({
  selector: 'app-dashboardproperty',
  templateUrl: './dashboardproperty.component.html',
  styleUrls: ['./dashboardproperty.component.css']
})
export class DashboardPropertyComponent {
  single: any[];
  multi: any[];

 // view: any[] = [500, 300];
  view;
  // options for circle
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Channel';
  showYAxisLabel = true;
  yAxisLabel = 'Message Sent';
  config = '';
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#f7504a']
  };
  // tslint:disable-next-line:member-ordering
  static X_PROPERTY_MAP: any = {
    sm: 'xSm',
    md: 'xMd',
    lg: 'xLg',
    xl: 'xXl'
  };

  // tslint:disable-next-line:member-ordering
  static Y_PROPERTY_MAP: any = {
    sm: 'ySm',
    md: 'yMd',
    lg: 'yLg',
    xl: 'yXl'
  };

  @ViewChild(GridsterComponent) gridster: GridsterComponent;
  itemOptions = {
     maxWidth: 12,
     maxHeight: 6
  };
  gridsterOptions: IGridsterOptions = {
    // core configuration is default one - for smallest view. It has hidden minWidth: 0.
    lanes: 2, // amount of lanes (cells) in the grid
    direction: 'vertical', // floating top - vertical, left - horizontal
    floating: true,
    dragAndDrop: true, // enable/disable drag and drop for all items in grid
    resizable: true, // enable/disable resizing by drag and drop for all items in grid
    resizeHandles: {
      s: true,
      e: true,
      se: true
    },
    widthHeightRatio: 1, // proportion between item width and height
    lines: {
      visible: true,
      color: '#afafaf',
      width: 2
    },
    shrink: true,
    useCSSTransforms: true,
    responsiveView: true, // turn on adopting items sizes on window resize and enable responsiveOptions
    responsiveDebounce: 500, // window resize debounce time
    // List of different gridster configurations for different breakpoints.
    // Each breakpoint is defined by name stored in "breakpoint" property. There is fixed set of breakpoints
    // available to use with default minWidth assign to each.
    // - sm: 576 - Small devices
    // - md: 768 - Medium devices
    // - lg: 992 - Large devices
    // - xl: 1200 - Extra large
    // MinWidth for each breakpoint can be overwritten like it's visible below.
    // ResponsiveOptions can overwrite default configuration with any option available.
    responsiveOptions: [
      {
        breakpoint: 'sm',
         minWidth: 480,
        lanes: 18
      },
      {
        breakpoint: 'md',
        minWidth: 768,
        lanes: 18
      },
      {
        breakpoint: 'lg',
        minWidth: 1250,
        lanes: 18
      },
      {
        breakpoint: 'xl',
        minWidth: 1800,
        lanes: 18
      }
    ]
  };
  gridsterDraggableOptions: IGridsterDraggableOptions = {
    handlerClass: 'panel-heading'
  };
  title = 'Angular2Gridster';
  widgets: Array<any> = [
    {
      x: 0, y: 0,
      w: 11, h: 3,
      dragAndDrop: true,
      resizable: false,
      title: 'Channel Detail',
      column: 1
    },
    {
      x: 0, y: 0,
      w: 11, h: 4,
      dragAndDrop: true,
      resizable: false,
      title: 'Channel Status',
      column: 2
    },
    {
      x: 0, y: 0,
      w: 10, h: 4,
      dragAndDrop: true,
      resizable: false,
      title: 'Today Usage Status',
      column: 4,
      icons: 'today',
      tooltip: 'Today Usage Status',
      status: [
        {
          count: 600,
          inactive: 10,
          msg: 'Mobile',
          scheduled: 10,
          icon: 'stay_current_portrait'
        },
        {
          count: 100,
          inactive: 10,
          msg: 'Web',
          scheduled: 10,
          icon: 'web'
        },
        {
          count: 50,
          inactive: 10,
          msg: 'Email',
          scheduled: 10,
          icon: 'email'
        },
        {
          count: 80,
          inactive: 10,
          msg: 'SMS',
          scheduled: 1,
          icon: 'sms'
        }
      ]
    },
    {
      x: 0, y: 0,
      w: 5, h: 3,
      dragAndDrop: true,
      resizable: false,
      title: 'Mobile Status',
      column: 3,
      icons: 'stay_current_portrait',
      tooltip: 'Mobile Status',
      status: [
        {
          successprocess: 60,
          success: 'Success',
          failureprocess: 10,
          failure: 'Failure',
          pendingprocess: 5,
          pending: 'Pending'
        }
      ]
    },
    {
      x: 0, y: 0,
      w: 5, h: 3,
      dragAndDrop: true,
      resizable: false,
      title: 'Web Status',
      column: 3,
      icons: 'web',
      tooltip: 'Web Status',
      status: [
        {
          successprocess : 90,
          success: 'Success',
          failureprocess: 10,
          failure: 'Failure',
          pendingprocess: 20,
          pending: 'Pending'
        }
        ]
    },
    {
      x: 0, y: 0,
      w: 5, h: 3,
      dragAndDrop: true,
      resizable: false,
      title: 'Email Status',
      column: 3,
      icons: 'email',
      tooltip: 'Email Status',
      status: [
        {
          successprocess: 70,
          success: 'Success',
          failureprocess: 30,
          failure: 'Failure',
          pendingprocess: 1,
          pending: 'Pending'
        }
      ]
    }
    ,
    {
      x: 0, y: 0,
      w: 5, h: 3,
      dragAndDrop: true,
      resizable: false,
      title: 'SMS Status',
      column: 3,
      icons: 'sms',
      tooltip: 'SMS Status',
      status: [
        {
          successprocess: 80,
          success: 'Success',
          failureprocess: 50,
          failure: 'Failure',
          pendingprocess: 3,
          pending: 'Pending'
        }
      ]
    }
  ];

  // line, area
  autoScale = true;

  constructor() {
    Object.assign(this, { single, multi });
  }

  onSelect(event) {
  //  console.log(event);
  }

  optionsChange(options: IGridsterOptions) {
    this.gridsterOptions = options;
 //   console.log('options change:', options);
  }
  itemChange($event: any, gridster) {
 //   console.log('item change', $event);
  }
  onReflow(event) {
  //  console.log('onReflow', event);
  }
  onResize(event) { this.view = [event.target.innerWidth - 900, 280]; }
}
