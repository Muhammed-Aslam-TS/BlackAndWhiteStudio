import { Component } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-residential-projects',
  templateUrl: './residential-projects.component.html',
  styleUrls: ['./residential-projects.component.css']
})
export class ResidentialProjectsComponent {

  // villasFilterData: any[] = []
  filteredResidentialImages:any[] = []

  constructor(private service: UserServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getResidential().subscribe((response: any) => {
      // response = response
      
      // this.villasFilterData = response
      this.filteredResidentialImages = response.filter((item:any) => item.category === "residential");
    });    

  }

  gotoGallery(id:string) {
    localStorage.setItem('imageId',id)
    this.router.navigate(['villaslGallery'])
  }






  p: number = 1;
  collection: any[] = this.filteredResidentialImages;
}
