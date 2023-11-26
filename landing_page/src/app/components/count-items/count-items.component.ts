import { Component, OnInit } from '@angular/core';

// import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-count-items',
  templateUrl: './count-items.component.html',
  styleUrls: ['./count-items.component.css'],

})
export class CountItemsComponent  {

  started = false;
  isCounting = false;
  startValue = 0;
  currentValue!: number;
  delay = 100;
  step = 5;

  endValues: number[] = [30, 50, 75, 10];

  groupLabels: string[] = ['Happy Clients', 'Cities', 'Projects Completed', 'Cups of Coffee']; // Customize these labels

  constructor() {
    this.currentValue = this.startValue;

    if (!this.started) {
      this.countUp();
      this.started = true;
      this.isCounting = true;
    }
  }

  countUp() {
    setTimeout(() => {
      if (this.currentValue! < this.endValues[0]) {
        if (this.isCounting) {
          this.currentValue! += this.step;
        }
        this.countUp();
      }
    }, this.delay);
  }
}
