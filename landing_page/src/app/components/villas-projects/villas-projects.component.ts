import { Component } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-villas-projects',
  templateUrl: './villas-projects.component.html',
  styleUrls: ['./villas-projects.component.css']
})
export class VillasProjectsComponent {

  filteredVillasImages:any[] = []

  constructor(private service: UserServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getResidential().subscribe((response: any) => {
      this.filteredVillasImages = response.filter((item: { category: string; }) => item.category === "villas");
    });
  }

  gotoGallery(id:string) {
    localStorage.setItem('imageId',id)
    this.router.navigate(['villaslGallery'])
  }






  p: number = 1;
  collection: any[] = this.filteredVillasImages;
}
