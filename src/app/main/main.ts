import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import {TranslatePipe} from "@ngx-translate/core";
import { TitleSerivce } from '../services/title/title';

@Component({
  selector: 'app-main',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {
  constructor(
    private title: TitleSerivce,
  ) {}  

  ngOnInit() {
    this.title.set('name');
  }
}
