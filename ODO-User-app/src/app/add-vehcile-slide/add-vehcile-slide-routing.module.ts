import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddVehcileSlidePage } from './add-vehcile-slide.page';

const routes: Routes = [
  {
    path: '',
    component: AddVehcileSlidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddVehcileSlidePageRoutingModule {}
