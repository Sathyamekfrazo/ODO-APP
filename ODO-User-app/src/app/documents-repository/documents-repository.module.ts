import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocumentsRepositoryPageRoutingModule } from './documents-repository-routing.module';

import { DocumentsRepositoryPage } from './documents-repository.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocumentsRepositoryPageRoutingModule
  ],
  declarations: [DocumentsRepositoryPage]
})
export class DocumentsRepositoryPageModule {}
