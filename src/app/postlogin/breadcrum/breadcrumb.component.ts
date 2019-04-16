import { Component, OnInit, DoCheck, ViewChild } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router, Event as RouterEvent, NavigationEnd, CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, ActivationEnd, Params, PRIMARY_OUTLET } from '@angular/router';

export interface IBreadcrumb {
  label: string;
  stringdata?: string;
  params?: Params;
  url: string;
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  public breadcrumbs: IBreadcrumb[];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.breadcrumbs = [];
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }
  ngOnInit(): void {
    const ROUTE_DATA_BREADCRUMB = 'tittle';

  }
  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {

    if (event instanceof NavigationEnd) {
     // console.log('navigation', event);
      let root: ActivatedRoute = this.activatedRoute.root;
      const navevent: any = event;
      this.breadcrumbs = this.getBreadcrumbs(root, navevent);
    //  console.log('breadcrum', this.breadcrumbs);
    }

  }
  private getBreadcrumbs(route: ActivatedRoute, navevent, url: string = '', breadcrumbs: IBreadcrumb[] = []): IBreadcrumb[] {
    const ROUTE_DATA_BREADCRUMB = 'tittle';
   // console.log('ActivatedRoute', navevent);
    // get the child routes
   // console.log('ActivatedRoute', route.root);
    let children: ActivatedRoute[] = route.children;

    // return if there are no more children
    if (children.length === 0) {
      return breadcrumbs;
    }

    // iterate over each children
    for (let child of children) {
      // verify primary route
    //  console.log('outlet', child.outlet);
      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }
     // console.log(child.snapshot.data);

      // verify the custom data property 'tittle' is specified on the route
      if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
        return this.getBreadcrumbs(child, navevent,  url, breadcrumbs);
      }
      // get the route's URL segment
      // console.log('map', child.snapshot.url);
      // let routeURLs: string = child.snapshot.url.map(segment => segment.path).join('/');
      let routeURL: string = navevent.url;
     // console.log('url', routeURL);
      // append route URL to URL
      url = `${routeURL}`;

      // add breadcrumb
      let breadcrumb: IBreadcrumb = {
        label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
        params: child.snapshot.params,
        url: url
      };
     // console.log('final beadcrumb', breadcrumb);
      breadcrumbs.push(breadcrumb);

      // recursive
      return this.getBreadcrumbs(child, navevent, url, breadcrumbs);
    }

    // we should never get here, but just in case
    return breadcrumbs;

  }

}
