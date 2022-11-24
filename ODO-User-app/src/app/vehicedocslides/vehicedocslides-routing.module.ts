import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicedocslidesPage } from './vehicedocslides.page';

const routes: Routes = [
  {
    path: '',
    component: VehicedocslidesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicedocslidesPageRoutingModule {}
