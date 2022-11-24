import { Component } from '@angular/core';
import { ApiService } from '../Providers/api.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  localUrl: any;
  doc_name:any;
  valid_upto:any;
  // message:any
  // user_id:any
  // image_base64:any
  // payData={};

  constructor(public service:ApiService) {}
  imageChange(event: any) {
    var payload={
      user_id:localStorage.getItem('userId'),
      doc_name:this.doc_name,
      image_base64:this.localUrl,
      valid_upto:this.valid_upto,
      message:"this is valid upto 12 days"
    }
    // this.payData;
    localStorage.setItem('addDosPayload',  JSON.stringify(payload))
    console.log(payload)
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.localUrl = event.target.result;
        console.log('=====', this.localUrl);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  addNewVehicleButton() {
    let body={
      "user_id":localStorage.getItem('userId'),
      "doc_name":this.doc_name,
      "image_base64":this.localUrl,
      "valid_upto":this.valid_upto,
      "message":"this is valid upto 12 days"
  }
      this.service.addDocument(body).subscribe(
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
