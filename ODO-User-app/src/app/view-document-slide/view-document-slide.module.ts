import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewDocumentSlidePageRoutingModule } from './view-document-slide-routing.module';

import { ViewDocumentSlidePage } from './view-document-slide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewDocumentSlidePageRoutingModule
  ],
  declarations: [ViewDocumentSlidePage]
})
export class ViewDocumentSlidePageModule {}
