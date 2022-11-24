import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentsRepositoryPage } from './documents-repository.page';

const routes: Routes = [
  {
    path: '',
    component: DocumentsRepositoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentsRepositoryPageRoutingModule {}
