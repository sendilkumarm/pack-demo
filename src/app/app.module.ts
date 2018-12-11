import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoCoreModule } from '@sen/demo-core';
import { DemoListModule } from '@sen/demo-list';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DemoCoreModule,
    DemoListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
