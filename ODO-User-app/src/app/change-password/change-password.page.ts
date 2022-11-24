import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../Providers/api.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
  mobile_number: string;
  new_pwd: string;
  old_pwd: string;
  constructor(public service: ApiService, public router: Router) {}

  ngOnInit() {}

  changePwd() {
    let body = {
      old_password: this.old_pwd,
      new_password: this.new_pwd,
      mobile_number: this.mobile_number,
    };
    this.service.changePwd(body).subscribe(
      (resp: any) => {
        this.router.navigateByUrl('/login');
      },
      (error) => {
        console.error('Error Occured Here', error);
      }
    );
  }
}
