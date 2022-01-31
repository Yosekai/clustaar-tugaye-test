import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Intent } from 'src/app/shared/model/intent';
import { IntentsService } from 'src/app/shared/service/intents.service';
import { SimpleIntentsDialogComponent } from './simple-intents-dialog/simple-intents-dialog.component';

@Component({
  selector: 'app-intents',
  templateUrl: './intents.component.html',
  styleUrls: ['./intents.component.scss']
})
export class IntentsComponent implements OnInit {

  intents: Intent[] = [];
  isLoading: boolean = true;

  constructor(private intentsService: IntentsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    setTimeout(() => {this.initData()}, 1000);
  }

  initData(): void {
    this.isLoading = true;
    this.intentsService.getAllIntents().subscribe((allIntents) => {
      this.isLoading = false;
      this.intents = allIntents
    });
  }

  openIntent(intentId?: string): void {
    const dialogRef = this.dialog.open(SimpleIntentsDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
