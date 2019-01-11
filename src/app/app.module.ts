import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BaneComponent } from './bane/bane.component';
import { BirdmanComponent } from './birdman/birdman.component';

@NgModule({
  declarations: [
    AppComponent,
    BaneComponent,
    BirdmanComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
