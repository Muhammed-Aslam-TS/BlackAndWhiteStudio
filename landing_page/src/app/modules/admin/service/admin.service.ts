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
export class AdminService {
  private ApiUrl = 'http://localhost:3000'
  // private ApiUrl = 'https://blackandwhitestudio.in'
  constructor(private http: HttpClient, private router: Router) { }

  heroImageUpdate(formData: any): Observable<any> {
    return this.http.post<any>(
      `${this.ApiUrl}/addImages`, formData,
    )
  }

  getHeroImage() {
    return this.http.get<any>(
      `${this.ApiUrl}/getImages`,
      httpOptions
    )
  }


  RsidentialImagesUpdate(formData: any): Observable<any> {
    return this.http.post<any>(
      `${this.ApiUrl}/addResidentialImages`, formData,
    )
  }



  GetRsidentialImages() {
    return this.http.get<any>(
      `${this.ApiUrl}/getResidentialImages`,
      httpOptions
    )
  }

  deleteBanner(ImageId:string){
    return this.http.delete<any>(
      `${this.ApiUrl}/DeleteBannerImage?imageId=${ImageId}`,
      httpOptions
    )
  }
  DeleteProjectsImage(ImageId:string){
    return this.http.delete<any>(
      `${this.ApiUrl}/deleteProjects?imageId=${ImageId}`,
      httpOptions
    )
  }

}
