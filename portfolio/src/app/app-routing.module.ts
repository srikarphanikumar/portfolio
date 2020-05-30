import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './ui/home/home.component';
import { MyselfComponent } from './ui/myself/myself.component';
import { CareerComponent } from './ui/career/career.component';
import { ContactMeComponent } from './ui/contact-me/contact-me.component';
import { TechStackComponent } from './ui/tech-stack/tech-stack.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full'
  },
  {
    path: 'about-myself', component: MyselfComponent, pathMatch: 'full'
  },
  {
    path: 'my-career', component: CareerComponent, pathMatch: 'full'
  },
  {
    path: 'contact-me', component: ContactMeComponent, pathMatch: 'full'
  },
  {
    path: 'technical-stack', component: TechStackComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [
  RouterModule.forRoot(routes)
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
