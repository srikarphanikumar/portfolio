import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { LibraryModule } from './lib/library-module';
import { HomeComponent } from './ui/home/home.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { MyselfComponent } from './ui/myself/myself.component';
import { CareerComponent } from './ui/career/career.component';
import { ContactMeComponent } from './ui/contact-me/contact-me.component';
import { TechStackComponent } from './ui/tech-stack/tech-stack.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MyselfComponent,
    CareerComponent,
    ContactMeComponent,
    TechStackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    LibraryModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
