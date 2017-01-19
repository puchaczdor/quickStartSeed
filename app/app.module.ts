import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],   // NgIf , NgFor y otras directivas
  declarations: [ AppComponent ],    // root component
  bootstrap:    [ AppComponent ]     // selector <my-app> del index.html
})
export class AppModule { }
