import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleDocSlidePage } from './vehicle-doc-slide.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleDocSlidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleDocSlidePageRoutingModule {}
