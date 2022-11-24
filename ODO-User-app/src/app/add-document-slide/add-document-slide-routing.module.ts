import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDocumentSlidePage } from './add-document-slide.page';

const routes: Routes = [
  {
    path: '',
    component: AddDocumentSlidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddDocumentSlidePageRoutingModule {}
