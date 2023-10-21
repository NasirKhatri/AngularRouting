import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutpatientsComponent } from './outpatients.component';
import { OpRoutingModule } from './op-routing.module';
import { OpComponentOneComponent } from './op-component-one/op-component-one.component';
import { OpComponentTwoComponent } from './op-component-two/op-component-two.component';



@NgModule({
  declarations: [
    OutpatientsComponent,
    OpComponentOneComponent,
    OpComponentTwoComponent
  ],
  imports: [
    CommonModule,
    OpRoutingModule
  ],
  bootstrap: [OpRoutingModule]
})
export class OutpatientsModule { }
