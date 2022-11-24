import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { ApiService } from '../Providers/api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  values = [];
  isNewvechileList:any=[];
  fulldata:any=[];
  emission_data:any=[];
  insurance_data:any=[];
  other_doc_data:any=[];
  permit_data:any=[];
  rc_data:any=[];
  allData:any=[];
  vehicleName:'';
  rescame:boolean=false;
  spinner:boolean=true;

  constructor(
    public actionSheetCtrl: ActionSheetController,public router:Router,public service:ApiService) {}

  ngOnInit() {
    this. getAllVehicleData()
    this.getVechileListServicealldetails()
  }
  removevalue(i) {
    this.values.splice(i, 1);
  }
showHideBlock(event){
  console.log(event);
  // event.target.parentElement.parentElement.parentElement.children[1].style.display='none'
  if(event.target.parentElement.parentElement.parentElement.children[1].style.display=='none'){
    event.target.parentElement.parentElement.parentElement.children[1].style.display='block'
  }else{
    event.target.parentElement.parentElement.parentElement.children[1].style.display='none'
  }
}
  addvalue() {
    this.values.push({ value: '' });
  }
  addNewVehicleButton(){
    this.router.navigateByUrl('/home');

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
  viewMoreBtn(){
    console.log('button clikced');
    this.router.navigateByUrl('/documents-preview')
  }



  getAllVehicleData(){
    this.service.getVehileListData().subscribe(
      (resp: any) => {
        if(resp.result){
          this.rescame=true;
          this.spinner=false;
        }
        this.fulldata=resp.result;
        // this.fulldata.push(resp.result.emission_data,resp.result.insurance_data,resp.result.other_doc_data,resp.result.permit_data,resp.result.rc_data,resp.result.vehicle_data);
        console.log(this.fulldata);
        this.emission_data=resp.result.emission_data;
        this.insurance_data=resp.result.insurance_data;
        this.other_doc_data=resp.result.other_doc_data;
        this.permit_data=resp.result.permit_data;
        this.rc_data=resp.result.rc_data;
        this.isNewvechileList = resp.result.vehicle_data;
        console.log(this.isNewvechileList,this.emission_data,this.insurance_data,this.other_doc_data,this.permit_data,this.rc_data);
      },
      (error) => {
        console.error('Error Occured Here', error);
      }
    );
    }
  getVechileListServicealldetails() {
    this.service.documentRepositoryService().subscribe(
      (resp: any) => {
        if(resp.result){
          this.rescame=true;
        }
        this.allData=resp.result.all_data;
        // this.isNewvechileList = resp.result.vehicle_data;
        console.log(resp,'respository data');
        // console.log(this.isNewvechileList,'this is new data');
      },
      (error) => {
        console.error('Error Occured Here', error);
      }
    );
  }
}