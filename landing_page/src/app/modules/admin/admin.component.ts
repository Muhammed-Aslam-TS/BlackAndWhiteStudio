import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit() {
    const UserName = localStorage.getItem('UserName')
    const Password = localStorage.getItem('Password')
    if (UserName && Password !== '') {
      setTimeout(() => {
        localStorage.removeItem('UserName');
        localStorage.removeItem('Password');
        this.router.navigate(['/admin/logIn']);
      }, 172800000); // 48 hours in milliseconds
    }
  }
}
