import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpComponentOneComponent } from './op-component-one/op-component-one.component';
import { OpComponentTwoComponent } from './op-component-two/op-component-two.component';

const routes: Routes = [
  {path: 'op-component-one', component: OpComponentOneComponent},
  {path: 'op-component-two', component: OpComponentTwoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class OpRoutingModule { }
