import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  // private ApiUrl = 'http://localhost:3000'
  private ApiUrl = 'https://blackandwhitestudio.in'

  constructor(private http: HttpClient, private router: Router) { }

  getHeroImage() {
    return this.http.get<any>(
      `${this.ApiUrl}/getImages`,
      httpOptions
    )
  }
  getResidential() {
    return this.http.get<any>(
      `${this.ApiUrl}/getResidentialImages`,
      httpOptions
    )
  }
  getResidentialImage(imageId: string) {
    return this.http.get<any>(
      `${this.ApiUrl}/getResidentialGalleryImages?imageId=${imageId}`,
      httpOptions
    )
  }

}
