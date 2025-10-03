import { Component } from '@angular/core';
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-contacts',
  imports: [TranslatePipe],
  templateUrl: './contacts.html',
  styleUrl: './contacts.css'
})
export class Contacts {
  emailContent = 'mailto:dkhlebnikova13@gmail.com';
}
