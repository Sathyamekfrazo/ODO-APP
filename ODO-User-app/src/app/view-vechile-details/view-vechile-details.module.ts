import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewVechileDetailsPageRoutingModule } from './view-vechile-details-routing.module';

import { ViewVechileDetailsPage } from './view-vechile-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewVechileDetailsPageRoutingModule
  ],
  declarations: [ViewVechileDetailsPage]
})
export class ViewVechileDetailsPageModule {}
