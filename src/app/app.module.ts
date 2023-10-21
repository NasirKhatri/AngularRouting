import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InpatientsModule } from './modules/inpatients/inpatients.module';
import { OutpatientsModule } from './modules/outpatients/outpatients.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InpatientsModule,
    OutpatientsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
