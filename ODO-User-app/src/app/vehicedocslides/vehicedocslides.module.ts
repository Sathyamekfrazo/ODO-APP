import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicedocslidesPageRoutingModule } from './vehicedocslides-routing.module';

import { VehicedocslidesPage } from './vehicedocslides.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicedocslidesPageRoutingModule
  ],
  declarations: [VehicedocslidesPage]
})
export class VehicedocslidesPageModule {}
