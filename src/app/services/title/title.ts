import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TitleSerivce {
  constructor(private title: Title, private translate: TranslateService) {}

  set(key: string) {
    this.translate.get(key).subscribe((translated: string) => {
      this.title.setTitle(translated);
    });
  }
}
