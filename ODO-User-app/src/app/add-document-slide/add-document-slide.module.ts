import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddDocumentSlidePageRoutingModule } from './add-document-slide-routing.module';

import { AddDocumentSlidePage } from './add-document-slide.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddDocumentSlidePageRoutingModule,
    ExploreContainerComponentModule,

  ],
  declarations: [AddDocumentSlidePage]
})
export class AddDocumentSlidePageModule {}
