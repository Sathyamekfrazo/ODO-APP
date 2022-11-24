import { DirectivesModule } from './../directives/directives.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    DirectivesModule,
    // HttpClient,
    HttpClientModule
  ],
  providers: [ HttpClientModule],
  declarations: [TabsPage]
})
export class TabsPageModule {}
