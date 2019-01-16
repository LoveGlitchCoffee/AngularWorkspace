import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { LinkbarComponent } from "../linkbar/linkbar.component";
import { CountdownComponent } from './countdown/countdown.component';

@NgModule({
  declarations: [
    AppComponent,
        BackgroundComponent,
    LinkbarComponent,
    CountdownComponent
  ],
  imports: [
      BrowserModule,
      NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
