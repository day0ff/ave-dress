import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavigationComponent } from './navigation/navigation.component';
import { IformationComponent } from './iformation/iformation.component';
import { DressComponent } from './dress/dress.component';
import { DressService } from './service/dress.service';
import { ContactsComponent } from './contacts/contacts.component';
import { DressDetailComponent } from './dress-detail/dress-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavigationComponent,
    IformationComponent,
    DressComponent,
    ContactsComponent,
    DressDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [DressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
