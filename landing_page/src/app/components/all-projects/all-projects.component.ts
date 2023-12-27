import { Component } from '@angular/core';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css']
})
export class AllProjectsComponent {
  tabs = ['commercial', 'residential','rennovation']; // Define your tab titles
  activeTab: string | undefined = this.tabs[0];
}

