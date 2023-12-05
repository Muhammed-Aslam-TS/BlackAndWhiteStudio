import { Component } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';
import { Router } from '@angular/router';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-villas-projects',
  templateUrl: './villas-projects.component.html',
  styleUrls: ['./villas-projects.component.css']
})
export class VillasProjectsComponent {

  filteredVillasImages: any[] = []

  constructor(private service: UserServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getResidential().subscribe((response: any) => {

      response.map((item: any) => {
        item.category = item.category.toLowerCase()
        if (item.category === "renovation") {
          this.filteredVillasImages.push(item)
        }
      });
    });
  }

  gotoGallery(id: string) {
    localStorage.setItem('imageId', id)
    this.router.navigate(['villaslGallery'])
  }






  p: number = 1;
  collection: any[] = this.filteredVillasImages;
}
