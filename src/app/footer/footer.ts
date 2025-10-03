import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd  } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-footer',
  imports: [TranslatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})

export class Footer {
  public showFooter = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  public currentYear(): number {
    return new Date().getFullYear();
  }

  ngOnInit() {
  this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    map(() => this.activatedRoute),
    map(route => {
      while (route.firstChild) route = route.firstChild;
      return route;
    })
  ).subscribe(route => {
    route.data.subscribe(data => {
      this.showFooter = data['showFooter'] !== false;
    });
  });
}
}
