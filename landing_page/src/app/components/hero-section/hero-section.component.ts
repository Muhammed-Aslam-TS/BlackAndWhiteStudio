import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';


@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit {
  allImages: any[] = [];
  constructor(private service: UserServiceService) { }
  isList: boolean | undefined;
  MenuHandler(flag: any) {
    flag ? (this.isList = true) : (this.isList = false);
  }

  playButton() {
    console.log('hello');
  }
  ngOnInit() {
    this.service.getHeroImage().subscribe((response: any) => {
      this.allImages = response
      // console.log(this.allImages, 'all images__________________');

    });
  }

}
