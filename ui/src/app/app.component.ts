import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';

import { MessagesComponent } from './messages/messages.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgIf,
    RouterOutlet,
    RouterLink,
    FormsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MessagesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {

  title = 'Cheeseria';
  allowEdits = true;

}
