import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { content, ContentItemType } from '../app.content';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery {
  configItem: ContentItemType = { id: '', title: '', path: '', description: '', gallery: [] };
  currentPath: string = '';

  constructor(private route: ActivatedRoute) {  
   }

  get id(): string {
    return this.route.snapshot.paramMap.get('id') as string;
  }

  galleryLength(): number {
    return this.configItem.gallery!.length;
  }

  ngOnInit(): void {
    this.configItem = content.find(item => item.id === this.id)!;
    this.currentPath = this.configItem.path
  }
}
