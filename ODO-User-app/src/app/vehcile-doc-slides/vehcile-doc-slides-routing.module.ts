import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicedocslidesPage } from '../vehicedocslides/vehicedocslides.page';

import { VehcileDocSlidesPage } from './vehcile-doc-slides.page';

// const routes: Routes = [
  
const routes: Routes = [
  {
    path: 'tabs',
    component: VehcileDocSlidesPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../add-vehcile-slide/add-vehcile-slide.module').then(m => m.AddVehcileSlidePageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../vehcile-doc-slides/vehcile-doc-slides.module').then(m => m.VehcileDocSlidesPageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../add-document-slide/add-document-slide.module').then(m => m.AddDocumentSlidePageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../view-document-slide/view-document-slide.module').then(m => m.ViewDocumentSlidePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehcileDocSlidesPageRoutingModule {}
