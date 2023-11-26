import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/component/nav-bar/nav-bar.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { FeaturesComponent } from './components/features/features.component';
import { AboutComponent } from './components/about/about.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PartnerSectionComponent } from './components/partner-section/partner-section.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { OurWorksComponent } from './components/our-works/our-works.component';
import { HowItsWorkComponent } from './components/how-its-work/how-its-work.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { WeHaveComponent } from './components/we-have/we-have.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhatWeOfferComponent } from './components/what-we-offer/what-we-offer.component';
import { CountItemsComponent } from './components/count-items/count-items.component';
import { ClintResponseComponent } from './components/clint-response/clint-response.component';
import { ResidentialGalleryComponent } from './components/residential-gallery/residential-gallery.component';
import { CommercialGalleryComponent } from './components/commercial-gallery/commercial-gallery.component';
import { VillasGalleryComponent } from './components/villas-gallery/villas-gallery.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ContactComponent } from './components/contact/contact.component';
import { AdminModule } from './modules/admin/admin.module';
import { CardComponent } from './reusebleComponents/card/card.component';
import { CommercialPojectsComponent } from './components/commercial-pojects/commercial-pojects.component';
import { WhatsAppButtonComponent } from './components/whats-app-button/whats-app-button.component';
import { ResidentialProjectsComponent } from './components/residential-projects/residential-projects.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VillasProjectsComponent } from './components/villas-projects/villas-projects.component';
import { App404Component } from './components/app404/app404.component';
import { PartnersSectionComponent } from './components/partners-section/partners-section.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeroSectionComponent,
    FeaturesComponent,
    AboutComponent,
    ProductListComponent,
    PartnerSectionComponent,
    LandingPageComponent,
    OurWorksComponent,
    HowItsWorkComponent,
    AboutUsComponent,
    WeHaveComponent,
    ContactUsComponent,
    FooterComponent,
    WhatWeOfferComponent,
    CountItemsComponent,
    ClintResponseComponent,
    ResidentialGalleryComponent,
    CommercialGalleryComponent,
    VillasGalleryComponent,
    ContactComponent,
    CardComponent,
    CommercialPojectsComponent,
    WhatsAppButtonComponent,
    ResidentialProjectsComponent,
    VillasProjectsComponent,
    App404Component,
    PartnersSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    AdminModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
