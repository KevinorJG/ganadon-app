import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APP_SERVER_URL } from '../constants/AppConstants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  headers: HttpHeaders = null!;

  constructor(private httpClient: HttpClient) {

    //Inicializando el cliente para que hacer peticiones al servidor
    this.headers = new HttpHeaders({
      'Content-Type' : 'application/json'
    });

    //Seteando la url base del servidor
    httpClient.options(APP_SERVER_URL);
  }
}
