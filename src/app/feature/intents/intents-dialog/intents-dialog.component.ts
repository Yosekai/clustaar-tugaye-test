import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intents-dialog',
  templateUrl: './intents-dialog.component.html',
  styleUrls: ['./intents-dialog.component.scss']
})
export class IntentsDialogComponent implements OnInit {
  intentType: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  selectIntentType(type: string): void {
    this.intentType = type;
  }
}
