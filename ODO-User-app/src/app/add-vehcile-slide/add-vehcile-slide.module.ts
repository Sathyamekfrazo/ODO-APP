import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddVehcileSlidePageRoutingModule } from './add-vehcile-slide-routing.module';

import { AddVehcileSlidePage } from './add-vehcile-slide.page';
import { HttpClientModule } from '@angular/common/http';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddVehcileSlidePageRoutingModule,
    HttpClientModule,
    ExploreContainerComponentModule,

  ],
  providers: [ HttpClientModule],
  declarations: [AddVehcileSlidePage]
})
export class AddVehcileSlidePageModule {}
