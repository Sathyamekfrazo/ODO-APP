import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-documents-repository',
  templateUrl: './documents-repository.page.html',
  styleUrls: ['./documents-repository.page.scss'],
})
export class DocumentsRepositoryPage implements OnInit {
  values = [];
  constructor(
    public actionSheetCtrl: ActionSheetController) {}

  ngOnInit() {}
  removevalue(i) {
    this.values.splice(i, 1);
  }

  addvalue() {
    this.values.push({ value: '' });
  }
  async uploadOptions() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Upload Files',

      buttons: [
        {
          text: 'Camera',
          data: {
            action: 'camera',
          },
        },
        {
          text: 'File Explore',
          data: {
            action: 'file',
          },
        },
        {
          text: 'Images',
          data: {
            action: 'image',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }
}