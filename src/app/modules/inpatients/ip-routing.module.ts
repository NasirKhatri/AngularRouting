import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InComponentOneComponent } from './in-component-one/in-component-one.component';
import { InComponentTwoComponent } from './in-component-two/in-component-two.component';

const routes: Routes = [
  {path: 'ip-component-one', component: InComponentOneComponent},
  {path: 'ip-component-two', component: InComponentTwoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class IpRoutingModule { }
