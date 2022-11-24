import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleDocSlidePageRoutingModule } from './vehicle-doc-slide-routing.module';

import { VehicleDocSlidePage } from './vehicle-doc-slide.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleDocSlidePageRoutingModule,
    ExploreContainerComponentModule

  ],
  declarations: [VehicleDocSlidePage]
})
export class VehicleDocSlidePageModule {}
