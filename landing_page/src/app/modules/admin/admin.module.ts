import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideBarComponent } from 'src/app/shared/component/admin/side-bar/side-bar.component';
import { HeroImgSectionComponent } from './hero-img-section/hero-img-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommertialProjectsComponent } from './commertial-projects/commertial-projects.component';
import { TableComponent } from './reusableComponent/table/table.component';
import { FormComponent } from './reusableComponent/form/form.component';
import { ResidentialProjectsComponent } from './residential-projects/residential-projects.component';
import { AdminAuthComponent } from 'src/app/shared/component/admin-auth/admin-auth.component';
import { AdminNavBarComponent } from 'src/app/shared/admin-nav-bar/admin-nav-bar.component';



@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    SideBarComponent,
    HeroImgSectionComponent,
    CommertialProjectsComponent,
    TableComponent,
    FormComponent,
    ResidentialProjectsComponent,
    AdminAuthComponent,
    AdminNavBarComponent,


  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
