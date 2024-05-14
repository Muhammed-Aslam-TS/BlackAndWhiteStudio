import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-popup-button-for-contact-form',
  templateUrl: './popup-button-for-contact-form.component.html',
  styleUrls: ['./popup-button-for-contact-form.component.css']
})
export class PopupButtonForContactFormComponent {
  isbuttonScrolled = false
  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }
  toggleCloseModal() {
    this.showModal = false;
  }

  @HostListener('window:scroll', ['$event'])
  scrollCheack() {
    window.scrollY > 100 ? this.isbuttonScrolled = true : this.isbuttonScrolled = false
  }

}
