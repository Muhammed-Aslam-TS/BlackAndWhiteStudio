import { Component } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commercial-pojects',
  templateUrl: './commercial-pojects.component.html',
  styleUrls: ['./commercial-pojects.component.css']
})
export class CommercialPojectsComponent {

  commertialInage: any[] = []
  filteredCommertialImages: any[] = []

  constructor(private service: UserServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getResidential().subscribe((response: any) => {
      response = response

      this.commertialInage = response
      this.filteredCommertialImages = this.commertialInage.filter((item) => item.category === "commertial");
    });

  }

  gotoGallery(id: string) {
    localStorage.setItem('imageId', id)
    this.router.navigate(['commertialGallery'])
  }


  p: number = 1;
  collection: any[] = this.commertialInage;
}
