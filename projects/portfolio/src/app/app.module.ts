import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from './app.component';
import { PieceComponent } from '../piece/piece.component';

@NgModule({
  declarations: [
    AppComponent,
    PieceComponent,    
  ],
  imports: [
      BrowserModule,
      NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
