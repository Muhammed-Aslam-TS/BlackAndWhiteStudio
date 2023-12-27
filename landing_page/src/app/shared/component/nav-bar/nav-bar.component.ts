import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  navbarOpen = false;
  selectedOption: string | null = 'home';
  color = false;

  handleOptionClick(option: string): void {
    this.selectedOption = option;
    this.navbarOpen = false;
  }

  @HostListener('window:scroll', ['$event'])
  changeColor(event: Event): void {
    if (window.scrollY > 50) {
      this.color = true;
    } else {
      this.color = false;
    }
  }

}
