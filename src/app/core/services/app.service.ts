import { Injectable } from '@angular/core';
import { APP_INFO, USER_SESSION } from '../constants/AppConstants';
import { AppInfo } from '../DTOS/AppInfo';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() {}

  public getInfoApp(): AppInfo | null {
    const appInfo = localStorage.getItem(USER_SESSION);
    return JSON.parse(appInfo!) as AppInfo
  }

  public saveInfoApp(app: AppInfo) {
    localStorage.setItem(APP_INFO, JSON.stringify(app));
  }

  public removeAllinfo(){
    localStorage.clear();
  }

 
  public encodePasswordBase64(password: string): string{
    return this.toBase64(password);
  }


  private toBase64(value: string): string{
    const encoder = new TextEncoder();
    const utfBytes = encoder.encode(value);
    return btoa(String.fromCharCode(...utfBytes));
  }



}
