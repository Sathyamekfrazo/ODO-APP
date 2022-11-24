import {
  AfterContentChecked,
  Component,
  OnInit,
  ViewChild,
  
} from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { from } from 'rxjs';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { ApiService } from '../Providers/api.service';
import SwiperCore, { Pagination } from 'swiper/core';

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-addvehicleslides',
  templateUrl: './addvehicleslides.page.html',
  styleUrls: ['./addvehicleslides.page.scss'],
})
export class AddvehicleslidesPage implements AfterContentChecked {
  config: SwiperOptions = {
    slidesPerView: 1,
    pagination: true,
  };
  @ViewChild('swiper') swiper: SwiperComponent;

  public vechileList = [];
  vehicle_number: any;
  vehicle_name: any;
  refrence_name: any;
  selectedIndex: any;
  viewmore: boolean = true;
  viewless: boolean = false;
  viewmore1: boolean = true;
  viewless1: boolean = false;
  viewmore2: boolean = true;
  viewless2: boolean = false;
  viewmore3: boolean = true;
  viewless3: boolean = false;
  viewmore4: boolean = true;
  viewless4: boolean = false;
  viewmore5: boolean = true;
  viewless5: boolean = false;
  localUrl: any;

  otherdocuments_remarks: any;

  // binding variable declaration
  other_date: any;
  emission_date: any;
  permit_date: any;
  rc_date: any;
  insurance_date: any;
  other_remarks: any;
  emission_remarks: any;
  permit_remarks: any;
  rc_remarks: any;
  insurance_remarks: any;
  rcImage_Url: any;
  permitImage_Url: any;
  emissionImage_Url: any;
  otherImage_Url: any;
  values = [];
  isNewvechileList: any = [];
  fulldata: any = [];
  emission_data: any = [];
  insurance_data: any = [];
  other_doc_data: any = [];
  permit_data: any = [];
  rc_data: any = [];
  allData: any = [];
  vehicleName: '';
  rescame: boolean = false;
  spinner: boolean = true;
  DefaltSlide:boolean=true;
  firstSlide:boolean=false;
  secondSlide:boolean=false;
  thridSlide:boolean=false;
  index:any;
  slides: any;

  constructor(
    public router: Router,
    public actionSheetCtrl: ActionSheetController,
    public service: ApiService
  ) {
    this.gatCategoriesListService();
    
    // this.index=localStorage.getItem('indexCards');
    // if(this.index==1){
    //   this.DefaltSlide=false;
    //   console.log(this.index)
    // }else if(this.index==2){
    //   this.DefaltSlide=false;
    //   this.firstSlide=true;
    // }else if(this.index==3){
    //   this.DefaltSlide=false;
    //   this.thridSlide=true;
    // }
  }
  setSwiperInstance(swiper: any) {
    this.slides = swiper;
    console.log("slides",this.slides);
  }
  ngAfterContentChecked(): void {
    if (this.swiper) {
      this.swiper.updateSwiper({});
    }
    console.log('content checked')
  }
  
  // values = [];
  swiperChange(e) {
    
    console.log('changes', e);
    this.index=e.activeIndex;
    console.log()
    // if(==1){
      // this.checkTheIndex(e.activeIndex)
      // localStorage.setItem('indexCards',e.activeIndex)
    
  }

  ngOnInit() {
    console.log('page changes')
    // this.getAllVehicleData();
    // this.getVechileListServicealldetails();
  }
  viewMoreDetails() {
    // this.router.navigateByUrl('/documents-repository');
    let body = {
      user_id: this.selectedIndex,
      vehicle_number: this.vehicle_number,
      vehicle_name: this.vehicle_name,
      refrence_name: this.refrence_name,
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
  AddtextBox() {
    this.viewmore = !this.viewmore;
    this.viewless = !this.viewless;
  }
  AddtextBox1() {
    this.viewmore1 = !this.viewmore1;
    this.viewless1 = !this.viewless1;
  }
  AddtextBox2() {
    this.viewmore2 = !this.viewmore2;
    this.viewless2 = !this.viewless2;
  }
  AddtextBox3() {
    this.viewmore3 = !this.viewmore3;
    this.viewless3 = !this.viewless3;
  }
  AddtextBox4() {
    this.viewmore4 = !this.viewmore4;
    this.viewless4 = !this.viewless4;
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

    // await actionSheet.present();
  }
  // images slected
  imageChange(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.localUrl = event.target.result;
        console.log('=====', this.localUrl);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  rcImageChange(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.rcImage_Url = event.target.result;
        console.log('=====', this.rcImage_Url);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  permitImageChange(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.permitImage_Url = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  emissionImageChange(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.emissionImage_Url = event.target.result;
        console.log('=====', this.emissionImage_Url);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  otherImageChange(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.otherImage_Url = event.target.result;
        console.log('=====', this.otherImage_Url);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  addNewVehicleButton() {
    let body = {
      user_id: localStorage.getItem('userId'),
      remarks: 'no',
      refrence_name: this.refrence_name,
      product_number: 'ka1234',
      owner_name: 'fara',
      mode: 'online',
      category: 'a',
      fitness_regn_upto: '2022/20/22',
      engine_number: '12',
      chassis_number: '12',
      fuel: 'yes',
      mv_tax_upto: '4',
      rc_status: 'yes',
      insurance_detail: 'yes',
      puc_number: '12345',
      emission_norms: 'yes',
      notes: 'online',
      vehicle_image: this.otherImage_Url,
      category_id: '3',
      vehicle_number: 'KA1234',
      vehicle_name: 'BMW',

      fitness_image: this.otherImage_Url,
      fitness_valid_date: '2022/11/01',
      fitness_due_days: '',

      insurance_image: this.localUrl,
      insurance_valid_date: '2022/11/01',
      insurance_due_days: '',
      insurance_remarks: '',

      rc_image: this.rcImage_Url,
      rc_valid_date: '2022/11/01',
      rc_due_days: '',
      rc_remarks: '',

      pd_image: this.rcImage_Url,
      permit_valid_date: '2022/11/01',
      permit_due_days: '',
      permit_remarks: '',

      em_image: this.emissionImage_Url,
      emission_valid_date: '2022/11/01',
      emission_due_days: '',
      emission_remarks: '',

      other_documents: [
        {
          name: 'Adhar_Card',
          image_base64: this.emissionImage_Url,
          validity: '2022/11/01',
        },
        {
          name: 'Pan_Card',
          image_base64: this.emissionImage_Url,
          validity: '2022/11/01',
        },
        {
          name: 'Voter_Id',
          image_base64: this.emissionImage_Url,
          validity: '2022/11/01',
        },
      ],
      otherdocuments_remarks: 'Yes',
    };
    console.log('save post data here', body);

    this.service.documentDetailService(body).subscribe(
      (resp: any) => {
        console.log('success', resp);
        localStorage.setItem('viecleAdded',resp);
        // this.two=true;
        // this.one=true;
        // if(this.two==true){
        //   this.three=true;
        //   if(this.three==true){
        //     this.fourth=true;
        //   }
        // }
        // this.router.navigateByUrl('/documents-repository');

      },
      (error) => {
        console.error('error occured here', error);
      }
    );
  }

  slideToViewDocs() {
    // this.addNewVehicleButton()
    this.swiper.swiperRef.slideNext(500);
    
    
    // this.addNewVehicleButton()
  }
  slideToPrev() {
    this.swiper.swiperRef.slidePrev(500);
  }
  removevalue(i) {
    this.values.splice(i, 1);
  }
  showHideBlock(event) {
    console.log(event);
    // event.target.parentElement.parentElement.parentElement.children[1].style.display='none'
    if (
      event.target.parentElement.parentElement.parentElement.children[1].style
        .display == 'none'
    ) {
      event.target.parentElement.parentElement.parentElement.children[1].style.display =
        'block';
    } else {
      event.target.parentElement.parentElement.parentElement.children[1].style.display =
        'none';
    }
  }
  addvalue() {
    this.values.push({ value: '' });
  }
  // addNewVehicleButton(){
  //   this.router.navigateByUrl('/home');

  // }
  async uploadOptionss() {
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
  viewMoreBtn() {
    console.log('button clikced');
    this.router.navigateByUrl('/documents-preview');
  }

  getAllVehicleData() {
    this.service.getVehileListData().subscribe(
      (resp: any) => {
        if (resp.result) {
          this.rescame = true;
          this.spinner = false;
        }
        this.fulldata = resp.result;
        // this.fulldata.push(resp.result.emission_data,resp.result.insurance_data,resp.result.other_doc_data,resp.result.permit_data,resp.result.rc_data,resp.result.vehicle_data);
        console.log(this.fulldata);
        this.emission_data = resp.result.emission_data;
        this.insurance_data = resp.result.insurance_data;
        this.other_doc_data = resp.result.other_doc_data;
        this.permit_data = resp.result.permit_data;
        this.rc_data = resp.result.rc_data;
        this.isNewvechileList = resp.result.vehicle_data;
        console.log(
          this.isNewvechileList,
          this.emission_data,
          this.insurance_data,
          this.other_doc_data,
          this.permit_data,
          this.rc_data
        );
      },
      (error) => {
        console.error('Error Occured Here', error);

      }
    );
  }
  getVechileListServicealldetails() {
    this.service.documentRepositoryService().subscribe(
      (resp: any) => {
        if (resp.result) {
          this.rescame = true;
        }
        this.allData = resp.result.all_data;
        // this.isNewvechileList = resp.result.vehicle_data;
        console.log(resp, 'respository data');
        // console.log(this.isNewvechileList,'this is new data');
      },
      (error) => {
        console.error('Error Occured Here', error);
      }
    );
  }
  
}
