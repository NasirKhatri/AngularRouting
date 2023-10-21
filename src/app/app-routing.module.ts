import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'inpatients', loadChildren: () => import('./modules/inpatients/inpatients.module').then(m => m.InpatientsModule)},
  {path: 'outpatient', loadChildren: () => import('./modules/outpatients/outpatients.module').then(m => m.OutpatientsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
