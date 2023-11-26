import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-residential-gallery',
  templateUrl: './residential-gallery.component.html',
  styleUrls: ['./residential-gallery.component.css']
})
export class ResidentialGalleryComponent implements OnInit {
  constructor(private serevice: UserServiceService) { }

  images: any[] = []
  name : any 

  ngOnInit(): void {
    const imageId = localStorage.getItem('imageId') as string
    this.serevice.getResidentialImage(imageId).subscribe((response: any) => {

      this.name = response.hedding
      this.images = response.img
      console.log(this.name,'lllllllllllllllllll')
    })
  }



  p: number = 1;
  collection: any[] = this.images;
}