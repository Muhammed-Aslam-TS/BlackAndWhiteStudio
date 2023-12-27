import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { VillasGalleryComponent } from './components/villas-gallery/villas-gallery.component';
import { OurWorksComponent } from './components/our-works/our-works.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CommercialPojectsComponent } from './components/commercial-pojects/commercial-pojects.component';
import { ResidentialGalleryComponent } from './components/residential-gallery/residential-gallery.component';
import { ResidentialProjectsComponent } from './components/residential-projects/residential-projects.component';
import { VillasProjectsComponent } from './components/villas-projects/villas-projects.component';
import { CommercialGalleryComponent } from './components/commercial-gallery/commercial-gallery.component';
import { App404Component } from './components/app404/app404.component';
import { CommercialComponent } from './components/all-projects/commercial/commercial.component';
import { AllProjectsComponent } from './components/all-projects/all-projects.component';
import { GetInnTouchComponent } from './components/get-inn-touch/get-inn-touch.component';
import { AdminAuthComponent } from './shared/component/admin-auth/admin-auth.component';

const routes: Routes = [
  { path: "", component: LandingPageComponent },
  { path: "about", component: AboutComponent },
  { path: "villas", component: VillasGalleryComponent },
  { path: "commercial", component: VillasGalleryComponent },
  { path: "residential", component: VillasGalleryComponent },
  { path: "projects", component: OurWorksComponent },
  { path: "aboutUs", component: AboutUsComponent },
  { path: "commercialProject", component: CommercialPojectsComponent },
  { path: "residentialProjects", component: ResidentialProjectsComponent },
  { path: "residentialGallery", component: ResidentialGalleryComponent },
  { path: "villaslProjects", component: VillasProjectsComponent },
  { path: "villaslGallery", component: VillasGalleryComponent },
  { path: "commertialProjects", component: CommercialPojectsComponent },
  { path: "commertialGallery", component: CommercialGalleryComponent },
  { path: "commertialGallery", component: CommercialGalleryComponent },
  { path: "allProjects", component: AllProjectsComponent },
  { path: "getInnTouch", component: GetInnTouchComponent },
  // { path: "adminLogin", component: AdminAuthComponent },
  {
    path: 'admin',
    loadChildren: () => import('././modules/admin/admin.module').then((m) => m.AdminModule),
  },
  { path: "**", component: App404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
