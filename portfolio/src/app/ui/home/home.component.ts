import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToMyself(event: Event) {
    this.router.navigate(['/', 'about-myself']);
  }

  goToCareer(event: Event) {
    this.router.navigate(['/', 'my-career']);
  }

  goToContactMe(event: Event) {
    this.router.navigate(['/', 'contact-me']);
  }

  goToTechStack(event: Event) {
    this.router.navigate(['/', 'technical-stack']);
  }
}
