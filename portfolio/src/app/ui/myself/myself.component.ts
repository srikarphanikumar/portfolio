import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myself',
  templateUrl: './myself.component.html',
  styleUrls: ['./myself.component.scss']
})
export class MyselfComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goHome(event: Event) {
    this.router.navigate(['']);
  }
}
