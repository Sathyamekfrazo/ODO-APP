import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehcileDocSlidesPageRoutingModule } from './vehcile-doc-slides-routing.module';

import { VehcileDocSlidesPage } from './vehcile-doc-slides.page';
import { HttpClientModule } from '@angular/common/http';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehcileDocSlidesPageRoutingModule,
    HttpClientModule,
    DirectivesModule
  ],
  providers: [ HttpClientModule],
  declarations: [VehcileDocSlidesPage]
})
export class VehcileDocSlidesPageModule {}
