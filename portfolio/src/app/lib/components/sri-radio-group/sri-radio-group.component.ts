import { 
  Component, 
  OnInit, 
  Input, 
  forwardRef, 
  ViewEncapsulation
} from '@angular/core';

import { 
  NG_VALUE_ACCESSOR, 
  ControlValueAccessor, 
  ControlContainer, 
  FormGroupDirective 
} from '@angular/forms';

import { RadioOptions } from './radio-options';

@Component({
  selector: 'sri-radio-group',
  templateUrl: './sri-radio-group.component.html',
  styleUrls: ['./sri-radio-group.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SriRadioGroupComponent),
    multi: true
  }],
  viewProviders: [{
    provide: ControlContainer, useExisting: FormGroupDirective
  }]
})
export class SriRadioGroupComponent implements OnInit, ControlValueAccessor {

  @Input() options: Array<RadioOptions>;
  @Input() viewOnly: boolean;
  @Input() formControlName: string;
  @Input() name: string;
  @Input() selectedValue: string;
  @Input() label: string;


  constructor() { }

  ngOnInit() {
    this.viewOnly = !!this.viewOnly;
  }

  writeValue(value: any): void {}

  registerOnChange(fn: any): void {}

  registerOnTouched(fn: any): void {}
}
