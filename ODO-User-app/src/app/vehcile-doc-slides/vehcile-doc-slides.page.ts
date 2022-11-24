import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-vehcile-doc-slides',
  templateUrl: './vehcile-doc-slides.page.html',
  styleUrls: ['./vehcile-doc-slides.page.scss'],
})
export class VehcileDocSlidesPage {
  tab1:boolean=true;
  tab2:boolean=false;
  tab3:boolean=false;
  @ViewChild('tabs') tabs: IonTabs;

  constructor() {}
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  onSwipe(event) {
    if(event?.swipeType == 'moveend') {
      console.log(event);
      const currentTab = this.tabs.getSelected();
      console.log('currentTab: ', currentTab);
      
      const nextTab = this.getNextTab(currentTab, event?.dirX);
      console.log(nextTab);
      if(nextTab) this.tabs.select(nextTab);
      if(nextTab=='tab1'){
        this.tab1=true;
        this.tab2=false;
        this.tab3=false;
        console.log('tab1')
      }else if(nextTab=='tab2'){
        this.tab1=false;
        this.tab2=true;
        this.tab3=false;
      }else if(nextTab=='tab3'){
        this.tab1=false;
        this.tab3=true;
        this.tab2=false;
      }
    }
  }

  getNextTab(currentTab, direction) {
    switch(currentTab) {
      case 'tab1': if(direction == 'left') return 'tab2'; else return null;
      case 'tab2': if(direction == 'right') return 'tab1'; else return 'tab3';
      case 'tab3': if(direction == 'right') return 'tab2'; else return null;
    }
  }

}
