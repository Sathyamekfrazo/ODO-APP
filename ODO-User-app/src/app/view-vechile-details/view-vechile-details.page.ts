import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-vechile-details',
  templateUrl: './view-vechile-details.page.html',
  styleUrls: ['./view-vechile-details.page.scss'],
})
export class ViewVechileDetailsPage implements OnInit {
  values = [];
  constructor() {}

  ngOnInit() {}
  removevalue(i) {
    this.values.splice(i, 1);
  }

  addvalue() {
    this.values.push({ value: '' });
  }
}
