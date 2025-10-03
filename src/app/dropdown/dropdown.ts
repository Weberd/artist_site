// dropdown.component.ts
import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.html',
  styleUrls: ['./dropdown.css'],
  standalone: true,
  imports: [CommonModule, TranslatePipe],
})
export class DropdownComponent {
  @ViewChild('dropdownContainer', { static: true }) dropdownContainer!: ElementRef;

  isOpen = false;

  menuItems = [
    { 
      label: 'graphics', 
      value: 'graphics',
    },
    { 
      label: 'digital', 
      value: 'digital',
    },
    { 
      label: 'illustrations', 
      value: 'illustrations',
    },
    { 
      label: 'prints', 
      value: 'prints',
    }
  ];

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  trackByFn(index: number, item: any): any {
    return item.value;
  }

  /**
   * Scroll to a fragment with the given id and close the dropdown.
   * @param id - The id of the fragment to scroll to.
   */
  scrollToFragment(id: string) {
    window.location.href = `/#${id}`;
  }

  // Close dropdown when clicking outside
  @HostListener('document:click', ['$event'])
  /**
   * Closes the dropdown when clicking outside.
   * If it is not, the dropdown is closed by setting isOpen to false.
   */


  onDocumentClick(event: Event): void {
    if (this.dropdownContainer && !this.dropdownContainer.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }
}