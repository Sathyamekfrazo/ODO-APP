import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddvehicleslidesPage } from './addvehicleslides.page';

const routes: Routes = [
  {
    path: '',
    component: AddvehicleslidesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddvehicleslidesPageRoutingModule {}
