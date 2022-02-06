import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { CardComponent } from './cards-container/card/card.component';
import { CardDialogComponent } from './cards-container/card/card-dialog/card-dialog.component';
import { CardsContainerComponent } from './cards-container/cards-container.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardDialogComponent,
    CardsContainerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
