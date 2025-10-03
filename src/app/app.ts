import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Footer } from "./footer/footer";
import { LanguageService } from './services/language/language';
import { TitleSerivce } from './services/title/title';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(
    private languageService: LanguageService,
    private title: TitleSerivce,
  ) {}  

  ngOnInit() {
    this.languageService.initLanguage('en', ['en', 'ru']);
    this.title.set('name');
  }
}
