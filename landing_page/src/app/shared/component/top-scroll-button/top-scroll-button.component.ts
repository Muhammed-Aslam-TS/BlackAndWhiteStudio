import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-top-scroll-button',
  templateUrl: './top-scroll-button.component.html',
  styleUrls: ['./top-scroll-button.component.css']
})
export class TopScrollButtonComponent {
  isScrolled: boolean = false
  @HostListener('window:scroll', ['$event'])
  scrollCheck() {
    window.scrollY > 100 ? this.isScrolled = true : this.isScrolled = false
  }

  // @HostListener('window:scroll', ['$event'])
  // scrollCheack() {
  //   window.scrollY > 100 ? this.isbuttonScrolled = true : this.isbuttonScrolled = false
  // }

  scrollTop(){
    document.body.scrollIntoView({behavior:'smooth'})
  }

}
