import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public ApiUrl = environment.liveURL;
  constructor(public httpClient: HttpClient) {}

  registerService(body: any): Observable<any> {
    return this.httpClient.post(this.ApiUrl + 'register', body);
  }
  loginService(body: any): Observable<any> {
    return this.httpClient.post(this.ApiUrl + 'login', body);
  }
  forgotPwdService(body: any): Observable<any> {
    return this.httpClient.post(this.ApiUrl + 'forgot-password-send-otp', body);
  }

  // otp-verify-forgot-pass
  otpVerifyForgotPwd(body: any): Observable<any> {
    return this.httpClient.post(this.ApiUrl + 'otp-verify-forgot-pass', body);
  }
}
