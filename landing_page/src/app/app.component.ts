import { Component ,OnInit} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'landing_page';
  isAdmin: boolean = true

  showNavBar: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Check if the current route is '/admin'
        this.showNavBar = !this.router.url.includes('/admin');
      }
    });
  }





}
