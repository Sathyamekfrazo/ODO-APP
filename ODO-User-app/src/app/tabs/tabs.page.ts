import { IonTabs } from '@ionic/angular';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../Providers/api.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  tab1:boolean=true;
  tab2:boolean=false;
  tab3:boolean=false;
  tab4:boolean=false;
  activeTab = 1;
  @ViewChild('tabs') tabs: IonTabs;


  constructor(public router:Router,public service:ApiService) {}
  setActiveTab(tabIndex: number) {
    this.activeTab = tabIndex;
  }
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
        this.tab4=false;

        console.log('tab1')
      }else if(nextTab=='tab2'){
        this.tab1=false;
        this.tab2=true;
        this.tab3=false;
        this.tab4=false;

      }else if(nextTab=='tab3'){
        this.tab1=false;
        this.tab3=true;
        this.tab2=false;
        this.tab4=false;

      }else if(nextTab=='tab4'){
        this.tab1=false;
        this.tab2=false;
        this.tab3=false;
        this.tab4=true;
      }
    }
  }

  getNextTab(currentTab, direction) {
    switch(currentTab) {
      case 'tab1': if(direction == 'left') return 'tab2'; else return null;
      case 'tab2': if(direction == 'right') return 'tab1'; else return 'tab3';
      case 'tab3': if(direction == 'right') return 'tab2'; else return 'tab4';
      case 'tab4': if(direction == 'right') return 'tab3'; else return null;
    }
  }
  gotoTabtwo(event){
    // let body=localStorage.getItem('postDataaddvehicle');
    // console.log(body);
    // this.router.navigate(['/tabs/tab2']);
    console.log(event);
    var getPath=window.location.pathname;
    if(getPath=='/tabs/tab1'){
      this.tab1=false;
      this.tab2=true;
      this.tab3=false;
      this.tab4=false;
      this.postVehicleData();

      this.router.navigate(['/tabs/tab2']);
    }else if(getPath=='/tabs/tab2'){
      this.tab1=false;
      this.tab3=true;
      this.tab2=false;
      this.tab4=false;
      this.router.navigate(['/tabs/tab3']);

    }else if(getPath=='/tabs/tab3'){
      this.tab1=false;
      this.tab2=false;
      this.tab3=false;
      this.tab4=true;
      this.postDoc();

      this.router.navigate(['/tabs/tab4']);

    }else if(getPath=='/tabs/tab4'){
      this.tab1=false;
      this.tab2=false;
      this.tab3=false;
      this.tab4=true;
      this.router.navigate(['/home']);

    }

  }
  postVehicleData(){
    let body=JSON.parse(localStorage.getItem('postDataaddvehicle')) ;
    this.service.documentDetailService(body).subscribe(
      (resp: any) => {
        console.log('success', resp);
        this.router.navigateByUrl('/documents-repository');
      },
      (error) => {
        console.error('error occured here', error);
      }
    );
  console.log(body);
  }
  setRootTab(event: any): void {
    switch (event?.tab) {
      case 'tab1':
           
          this.router.navigateByUrl('tabs/tab2');

        break;

      case 'tab2':
        this.router.navigateByUrl('tabs/tab3');

        break;

    

      default:
    }
  }
  postDoc(){
    let payLoad=JSON.parse(localStorage.getItem('addDosPayload'));
    this.service.addDocument(payLoad).subscribe(
      (resp: any) => {
        console.log('success', resp);
        // this.router.navigateByUrl('/documents-repository');
      },
      (error) => {
        console.error('error occured here', error);
      }
    );
  }
}
