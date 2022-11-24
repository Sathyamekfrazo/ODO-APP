import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { AddvehicleslidesPageRoutingModule } from './addvehicleslides-routing.module';
import {SwiperModule} from 'swiper/angular';
import { AddvehicleslidesPage } from './addvehicleslides.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddvehicleslidesPageRoutingModule,
    SwiperModule,
    // HttpClient
  ],
  declarations: [AddvehicleslidesPage]
})
export class AddvehicleslidesPageModule {}
