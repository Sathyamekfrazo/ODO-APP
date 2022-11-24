import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewDocumentSlidePage } from './view-document-slide.page';

const routes: Routes = [
  {
    path: '',
    component: ViewDocumentSlidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewDocumentSlidePageRoutingModule {}
