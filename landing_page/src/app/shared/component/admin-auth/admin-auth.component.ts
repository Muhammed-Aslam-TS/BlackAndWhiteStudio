import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.css']
})
export class AdminAuthComponent {
  userName: string = 'adminBlack&white';
  password: string = 'adminBlack&white';
  bodyUserName: string = '';
  bodyPassword: string = '';
  errorMsg: string = '';
  errorMsg2: string = '';

  constructor(private router: Router, private route: ActivatedRoute) { }

  logIn() {
    localStorage.setItem('UserName', this.bodyUserName);
    localStorage.setItem('Password', this.password);


    const UserName = localStorage.getItem('UserName')?.toString()
    console.log('UserName: ', UserName);
    const Password = localStorage.getItem('Password')?.toString()
    console.log('Password: ', Password);

    if (UserName === this.userName && Password === this.password) {
      this.router.navigate(['/admin/adminDashboard'])

    } else if (this.bodyUserName === '' && this.bodyPassword === '') {
      this.errorMsg = 'Password or UserName  is required';
    } else {
      this.errorMsg = 'Username or Password is Incorrect';
    }
  }

}
