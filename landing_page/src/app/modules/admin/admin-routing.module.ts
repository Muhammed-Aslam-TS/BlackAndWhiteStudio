import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminAuthComponent } from 'src/app/shared/component/admin-auth/admin-auth.component';



// const routes: Routes = [
//   {
//     path: '', component: AdminComponent,
//     children: [
//       { path: 'logIn', component: AdminAuthComponent },
//       { path: 'adminDashBoard', component: DashboardComponent },
//     ]
//   }
// ];

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'logIn', component: AdminAuthComponent,
      },
      { path: '', redirectTo: 'logIn', pathMatch: 'full' },
      {
        path: 'adminDashboard', component: DashboardComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
