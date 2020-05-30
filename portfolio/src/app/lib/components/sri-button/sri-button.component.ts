import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sri-button',
  templateUrl: './sri-button.component.html',
  styleUrls: ['./sri-button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SriButtonComponent {

  @Input() btnType: string;
  @Input() disabled: boolean;
  @Input() disableRipple = true;
  constructor() { }

  stopPropogation(event: Event) {
    event.preventDefault();
    event.stopPropagation();
  }
}
