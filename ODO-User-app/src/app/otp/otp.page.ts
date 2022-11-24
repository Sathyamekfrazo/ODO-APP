import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from '../Providers/api.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OTPPage implements OnInit {
  otpForm: FormGroup;
  password1: any;
  password: any;
  password2: any;
  password3: any;
  password4: any;
  password5: any;
  password6: any;
  OptResponse: any;
  PrintOtp:any=[];
  finalres:any={};
  OTP: any =  {
    first: '',
    second: '',
    third: '',
    forth: '',
    // fifth: '',
    // sixth: ''
  };
  
  constructor(public router: Router, public service: ApiService) {
    var retrievedObject = localStorage.getItem('response');
    this.OptResponse = JSON.parse(retrievedObject);
    console.log(this.OptResponse,"navtohome");
    if(this.OptResponse && this.OptResponse.result !=undefined && this.OptResponse.result.data !=undefined && this.OptResponse.result.data=="Register successful"){
      const arrOfStrs = Array.from(String(this.OptResponse.result.otp));
      const arrOfNums = arrOfStrs.map((str) => Number(str));
      this.OTP['first']=arrOfNums[0];
      this.OTP['second']=arrOfNums[1];
      this.OTP['third']=arrOfNums[2];
      this.OTP['forth']=arrOfNums[3];
      // this.OTP['fifth']=arrOfNums[4];
      // this.OTP['sixth']=arrOfNums[5];
    }else if(this.OptResponse.detail="Login successfull"){
      const arrOfStrs = Array.from(String(this.OptResponse.otp));
      const arrOfNums = arrOfStrs.map((str) => Number(str));
      this.OTP['first']=arrOfNums[0];
      this.OTP['second']=arrOfNums[1];
      this.OTP['third']=arrOfNums[2];
      this.OTP['forth']=arrOfNums[3];
      // this.OTP['fifth']=arrOfNums[4];
      // this.OTP['sixth']=arrOfNums[5];
      // const arrOfStrs = Array.from(String(this.OptResponse.result.otp));
    }
    
     
    
    // console.log(arrOfNums);


    this.PrintOtp=JSON.parse(retrievedObject);
    var otp=this.PrintOtp;
    
    var stotp=otp.otp;
    
    // var splitString=stotp.split('');
    // var arrtoObj=Object.assign({},splitString);
    this.finalres=stotp;
    // console.log('final res',this.finalres)
    

  }
  // OTP: string = '';

  otpController(event,next,prev, index){
  
  
      if(index == 6) {
        console.log("submit")
      }
      if(event.target.value.length < 1 && prev){
        prev.setFocus()
      }
      else if(next && event.target.value.length>0){
        next.setFocus();
      }
      else {
       return 0;
      } 
   }
  ngOnInit() {}
  navtoHome() {
    if (this.OptResponse) {
      console.log(this.OptResponse,"navtohome")
      this.password =
        this.OTP.first.toString() +
        this.OTP.second.toString() +
        this.OTP.third.toString() +
        this.OTP.forth.toString();
        // this.OTP.fifth.toString() +
        // this.OTP.sixth.toString();

        if (this.OptResponse.result!=undefined && this.OptResponse.result.otp!=undefined && this.OptResponse.result.otp == this.password) {
          this.router.navigateByUrl('/tabs');
          localStorage.removeItem('response');
          alert("OTP Registration is succesfull")
        }else if (this.OptResponse.otp == this.password) {
        this.router.navigateByUrl('/home');
        localStorage.removeItem('response');
        alert("OTP verification is succesfull")
        // this.service.loginService(temp).subscribe((resp: any) => {
        //   this.router.navigateByUrl('/home');
        //   localStorage.removeItem('mobile_number');
        // });
      }
    } else {
      let body = {
        mobile_number: '12345687665444',
        otp: '820681',
      };
      this.service.otpVerifyForgotPwd(body).subscribe(
        (resp: any) => {
          alert("OTP verification is succesfull")
          console.log('response', resp);
          // this.router.navigateByUrl('/change-password');
        },
        (error) => {
          // this.router.navigateByUrl('/change-password');
          alert("please enter valid OTP")
          console.error('Error Occured Here', error);
        }
      );
    }
  }
}
