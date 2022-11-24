import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../Providers/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  carSpecifications: boolean = false;
  carSpecifications1: boolean = false;
  carSpecifications2: boolean = false;
  vechileList: any = [];
  isNewvechileList:any=[];
  insuranceData:any=[];
  emissionData:any=[];
  fitnessData:any=[];
  viewmore: boolean = true;
  viewless: boolean = false;
  spinner:boolean=true;
  constructor(public service: ApiService,public router:Router) {}

  vehiclePropVisible = this.isNewvechileList.map(() => false);

  togglePropVisible(i: number): void {
    this.vehiclePropVisible[i] = !this.vehiclePropVisible[i];
    
  }

  ngOnInit() {
    // this.getVechileListService();
    this.getVechileListServicealldetails()
  }
  
  AddViewMoreContainer(id) {
    
    console.log(id);
    this.viewmore = !this.viewmore;
    this.viewless = !this.viewless;
    // const nId = id.toString(); 
    // this.viewless = !this.viewless;
    // if(this.viewless) {
    //   document.getElementById(nId).style.display = 'none';
    // } else {
    //   document.getElementById(nId).style.display = 'block';
    // }
  }
  viewInformation() {
    this.carSpecifications = !this.carSpecifications;
    this.carSpecifications1 = !this.carSpecifications1;
    this.carSpecifications2 = !this.carSpecifications2;
  }

  // getVechileListService() {
  //   this.service.getVehileList().subscribe(
  //     (resp: any) => {
  //       this.vechileList = resp.result.data;
  //       console.log(this.vechileList);
  //     },
  //     (error) => {
  //       console.error('Error Occured Here', error);
  //     }
  //   );
  // }
  getVechileListServicealldetails() {
    this.service.getVehileListData().subscribe(
      (resp: any) => {
        if(resp){
          this.spinner=false;
        }
        this.isNewvechileList = resp.result.vehicle_data;
        this.insuranceData=resp.result.insurance_data;
        this.emissionData=resp.result.emission_data;
        this.fitnessData=resp.result.permit_data;
        console.log(resp,'this is new data');
        console.log(this.isNewvechileList,'this is new data');
      },
      (error) => {
        console.error('Error Occured Here', error);
      }
    );
  }
  gotoPreview(event){
    // console.log(event.target.parentElement.id=='insurance','this is event data')
    localStorage.setItem('selectedidfromhome', event.target.parentElement.id);
    this.router.navigateByUrl('/documents-preview')
  }
}
