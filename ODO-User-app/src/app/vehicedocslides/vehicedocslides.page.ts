import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, IonSlides } from '@ionic/angular';
import { ApiService } from '../Providers/api.service';

@Component({
  selector: 'app-vehicedocslides',
  templateUrl: './vehicedocslides.page.html',
  styleUrls: ['./vehicedocslides.page.scss'],
})
export class VehicedocslidesPage implements OnInit {
  public vechileList = [];
  vehicle_number: any;
  vehicle_name:any;
  refrence_name:any;
  selectedIndex: any;
  viewmore:boolean = true
  viewless:boolean = false
  segment=0;
  selectedSlide:any;
  sliderOptions={
    initialSlide:0,
    slidesPerview:1,
    speed:400
  }
  default:boolean=true;
  first:boolean=false;
  second:boolean=false;
  constructor( public router: Router,
    public actionSheetCtrl: ActionSheetController,
    public service: ApiService) { this.gatCategoriesListService();}
    values = [];

  ngOnInit() {
  }
  segementtoNXT(){
    this.selectedSlide.slideNext();

  }
async segmentChanged(ev){
  await this.selectedSlide.slideTo(this.segment);
  console.log('segmentChanged', this.selectedSlide.slideTo(this.segment))
}
async slidesChanged(slides:IonSlides){
this.selectedSlide=slides;
console.log('selectedSlide', this.selectedSlide)

slides.getActiveIndex().then(selectedIndex=>{
  this.segment=selectedIndex;
  console.log('this.segment', this.segment)
  if(this.segment==0){
    // this.default==true;
    // this.first=false;
    // this.second=false;
  }else if(this.segment==1){
    this.default=false;
    this.first=true;
    this.second=false;
  }else if(this.segment==2){
    this.default=false;
    this.second=true;
    this.first=false;
  }
})
}

viewMoreDetails() {
  // this.router.navigateByUrl('/documents-repository');
  let body = {
    user_id: this.selectedIndex,
    vehicle_number: this.vehicle_number,
    vehicle_name:this.vehicle_name,
    refrence_name:this.refrence_name
  };
  this.service.addAnewVehicle(body).subscribe(
    (resp: any) => {
      console.log(resp);
      this.router.navigateByUrl('/home');
    },
    (error) => {
      console.error('Error Occured here', error);
    }
  );
}
AddtextBox(){
  this.viewmore=!this.viewmore;
  this.viewless=!this.viewless
}

// viewMoreDetails() {
//   // this.router.navigateByUrl('/documents-repository');
//   let body = {
//     user_id: this.selectedIndex,
//     vehicle_number: this.vehicle_number,
//   };
//   this.service.addVechile(body).subscribe(
//     (resp: any) => {
//       console.log(resp);
//       this.router.navigateByUrl('/home');
//     },
//     (error) => {
//       console.error('Error Occured here', error);
//     }
//   );
// }
addNewVehicleButton(){
  // let body = {
  //   user_id: this.selectedIndex,
  //   vehicle_number: this.vehicle_number,
  // };
  // this.service.addAnewVehicle(body).subscribe((res:any)=>{
  //   console.log(res);
    this.router.navigateByUrl('/home');
  // },(error)=>{
  //   console.error('error was occured due to unmatched',error)
  // }
  // )
}
removevalue(i) {
  this.values.splice(i, 1);
}

addvalue() {
  this.values.push({ value: '' });
}

handleChange(e) {
  this.selectedIndex = e.detail.value;
}

gatCategoriesListService() {
  this.service.getCategoryList().subscribe(
    (resp: any) => {
      this.vechileList = resp.result.data;
      console.log('====', this.vechileList);
    },
    (error) => {
      console.error('Error Occured Here', error);
    }
  );
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
