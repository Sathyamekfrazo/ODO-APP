import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { ApiService } from '../Providers/api.service';

@Component({
  selector: 'app-add-vehcile-slide',
  templateUrl: './add-vehcile-slide.page.html',
  styleUrls: ['./add-vehcile-slide.page.scss'],
})
export class AddVehcileSlidePage implements OnInit {
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
  
  constructor(
    public router: Router,
    public actionSheetCtrl: ActionSheetController,
    public service: ApiService
  ) {
    this.gatCategoriesListService();
    
  }
  values = [];

  ngOnInit() {}
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
  // addNewVehicleButton() {
  //   // let body = {
  //   //   user_id: this.selectedIndex,
  //   //   vehicle_number: this.vehicle_number,
  //   // };
  //   // this.service.addAnewVehicle(body).subscribe((res:any)=>{
  //   //   console.log(res);
  //   this.router.navigateByUrl('/home');
  //   // },(error)=>{
  //   //   console.error('error was occured due to unmatched',error)
  //   // }
  //   // )
  // }
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
      // user_id: '27',
      // remarks: 'no',
      // refrence_name: this.refrence_name,
      // product_number: this.vehicle_number,
      // owner_name: this.vehicle_name,
      // mode: 'online',
      // category: this.selectedIndex,
      // fitness_regn_upto: '2022/10/22',
      // engine_number: '12',
      // chassis_number: '12',
      // fuel: 'yes',
      // mv_tax_upto: '4',
      // rc_status: 'yes',
      // insurance_detail: 'yes',
      // puc_number: '12345',
      // emission_norms: 'yes',
      // notes: 'online',
      // vehicle_image: '',
      // category_id: this.selectedIndex,
      // vehicle_number: this.vehicle_number,
      // vehicle_name: this.vehicle_name,
      // fitness_image: this.otherImage_Url,
      // fitness_valid_date: moment(this.other_date).format('YYYY/MM/DD'),
      // fitness_due_days: '',
      // insurance_image: this.localUrl,
      // insurance_valid_date: moment(this.insurance_date).format('YYYY/MM/DD'),
      // insurance_due_days: '',
      // insurance_remarks: this.insurance_remarks,
      // rc_image: this.rcImage_Url,
      // rc_valid_date: moment(this.rc_date).format('YYYY/MM/DD'),
      // rc_due_days: '',
      // rc_remarks: this.rc_remarks,
      // pd_image: '',
      // permit_valid_date: moment(this.permit_date).format('YYYY/MM/DD'),
      // permit_due_days: '',
      // permit_remarks: this.permit_remarks,
      // em_image: this.emissionImage_Url,
      // emission_valid_date: moment(this.emission_date).format('YYYY/MM/DD'),
      // emission_due_days: '',
      // emission_remarks: this.emission_remarks,
      // other_documents: [
      //   {
      //     name: 'Adhar_Card',
      //     image_base64: '',
      //     validity: '2022/11/01',
      //   },
      //   {
      //     name: 'Pan_Card',
      //     image_base64: '',
      //     validity: '2022/11/01',
      //   },
      //   {
      //     name: 'Voter_Id',
      //     image_base64: '',
      //     validity: '2022/11/01',
      //   },
      // ],
      // otherdocuments_remarks: 'Yes',
      
    "user_id":localStorage.getItem('userId'),
    "remarks":"no",
    "refrence_name":this.refrence_name,
    "product_number":"ka1234",
    "owner_name":"fara",
    "mode":"online",
    "category":"a",
    "fitness_regn_upto":"2022/20/22",
    "engine_number":"12",
    "chassis_number":"12",
    "fuel":"yes",
    "mv_tax_upto":"4",
    "rc_status":"yes",
    "insurance_detail":"yes",
    "puc_number":"12345",
    "emission_norms":"yes",
    "notes":"online",
    "vehicle_image":this.otherImage_Url,
    "category_id":"3",
    "vehicle_number":"KA1234",
    "vehicle_name":"BMW",
    
    "fitness_image":this.otherImage_Url,
    "fitness_valid_date":"2022/11/01",
    "fitness_due_days":"",
    
        "insurance_image":this.localUrl,
    "insurance_valid_date":"2022/11/01",
    "insurance_due_days":"",
    "insurance_remarks":"",
    
    "rc_image":this.rcImage_Url,
    "rc_valid_date":"2022/11/01",
    "rc_due_days":"",
    "rc_remarks":"",
    
    "pd_image":this.rcImage_Url,
    "permit_valid_date":"2022/11/01",
    "permit_due_days":"",
    "permit_remarks":"",
    
    
    "em_image":this.emissionImage_Url,
    "emission_valid_date":"2022/11/01",
    "emission_due_days":"",
    "emission_remarks":"",
    
    
    "other_documents":[{
            "name":"Adhar_Card",
            "image_base64":this.emissionImage_Url,
            "validity":"2022/11/01"
        },
        {
            "name":"Pan_Card",
            "image_base64":this.emissionImage_Url,
            "validity":"2022/11/01"
        },{
            "name":"Voter_Id",
            "image_base64":this.emissionImage_Url,
            "validity":"2022/11/01"
        }],
        "otherdocuments_remarks":"Yes"
        
    };
    console.log('save post data here', body);

    this.service.documentDetailService(body).subscribe(
      (resp: any) => {
        console.log('success', resp);
        this.router.navigateByUrl('/documents-repository');
      },
      (error) => {
        console.error('error occured here', error);
      }
    );
  }
}