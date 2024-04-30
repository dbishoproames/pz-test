import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common'

import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    MatButtonModule,
    MatExpansionModule
  ],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.less'
})
export class MessagesComponent {

  panelOpenState = false;

  constructor(
      public messageService: MessageService) {
  }

}
