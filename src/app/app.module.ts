import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntentsComponent } from './feature/intents/intents.component';
import { SimpleIntentsDialogComponent } from './feature/intents/simple-intents-dialog/simple-intents-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    IntentsComponent,
    SimpleIntentsDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
