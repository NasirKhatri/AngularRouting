import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InpatientsComponent } from './inpatients.component';
import { IpRoutingModule } from './ip-routing.module';
import { InComponentOneComponent } from './in-component-one/in-component-one.component';
import { InComponentTwoComponent } from './in-component-two/in-component-two.component';



@NgModule({
  declarations: [
    InpatientsComponent,
    InComponentOneComponent,
    InComponentTwoComponent
  ],
  imports: [
    CommonModule,
    IpRoutingModule
  ],
  bootstrap: [InpatientsComponent]
})
export class InpatientsModule { }
