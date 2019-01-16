import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { LinkbarComponent } from "../linkbar/linkbar.component";

@NgModule({
  declarations: [
    AppComponent,
        BackgroundComponent,
    LinkbarComponent
  ],
  imports: [
      BrowserModule,
      NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
