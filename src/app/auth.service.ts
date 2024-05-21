import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

export class AuthService{

    constructor(private httpClient: HttpClient){

    }

    getAllEmployees(url:string) : Observable<any> {
        return this.httpClient.get(url);
    }

    getAllVendors(url:string) : Observable<any> {
        return this.httpClient.get(url);
    }

    getAllVendorsSmsDetails(url:string) : Observable<any> {
        return this.httpClient.get(url);
    }

    sendMailToVendors(url:string, data:any) : Observable<any> {
        return this.httpClient.post(url, data);
    }


    saveEmployee(url:string, data:any) :  Observable<any> {
        return this.httpClient.post(url, data);
    }

    saveVendor(url:string, data:any) :  Observable<any> {
        return this.httpClient.post(url,data);
    }


}