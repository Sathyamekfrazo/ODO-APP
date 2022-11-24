import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewVechileDetailsPage } from './view-vechile-details.page';

const routes: Routes = [
  {
    path: '',
    component: ViewVechileDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewVechileDetailsPageRoutingModule {}
