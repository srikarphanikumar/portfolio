import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CareerComponent } from './career/career.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';


@NgModule({
  imports: [
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    CareerComponent,
    ContactMeComponent,
    TechStackComponent
  ],
  exports: [
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    CareerComponent,
    ContactMeComponent,
    TechStackComponent
  ],
  declarations: [],
  providers: [],
})
export class UIModule { }
