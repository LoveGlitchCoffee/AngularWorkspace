import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent, SafePipe } from './app.component';
import { PieceComponent } from '../piece/piece.component';
import { LinkbarComponent } from '../linkbar/linkbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PieceComponent,
    LinkbarComponent,
    SafePipe
  ],
  imports: [
      BrowserModule,
      NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
