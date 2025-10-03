import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DropdownComponent } from '../dropdown/dropdown';
import { Router, ActivatedRoute, NavigationEnd  } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import {TranslatePipe} from "@ngx-translate/core";
import { LanguageService } from '../services/language/language';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    DropdownComponent,
    TranslatePipe
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  public mobileMenuIsOpen = false;
  public showNavbar = true;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private languageService: LanguageService
  ) {}

  setLanguage(lang: string) {
    this.languageService.setLanguage(lang);
  }

  toggleMobileMenu() {
    this.mobileMenuIsOpen = !this.mobileMenuIsOpen;
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
        this.showNavbar = data['showNavbar'] !== false;
      });
    });
  }
}
