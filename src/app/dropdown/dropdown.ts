// dropdown.component.ts
import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.html',
  styleUrls: ['./dropdown.css'],
  standalone: true,
  imports: [CommonModule],
})
export class DropdownComponent {
  @ViewChild('dropdownContainer', { static: true }) dropdownContainer!: ElementRef;

  isOpen = false;

  // Sample menu items - you can customize these
  menuItems = [
    { 
      label: 'графика и живопись', 
      value: 'graphics',
    },
    { 
      label: 'digital', 
      value: 'digital',
    },
    { 
      label: 'иллюстрации', 
      value: 'illustrations',
    },
    { 
      label: 'принты', 
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