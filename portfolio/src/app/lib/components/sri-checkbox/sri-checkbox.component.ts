import {
  Component,
  OnInit,
  Input,
  forwardRef,
  Output,
  EventEmitter
} from '@angular/core';

import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  ControlContainer,
  FormGroupDirective
} from '@angular/forms';

@Component({
  selector: 'sri-checkbox',
  templateUrl: './sri-checkbox.component.html',
  styleUrls: ['./sri-checkbox.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SriCheckboxComponent),
    multi: true
  }],
  viewProviders: [{
    provide: ControlContainer, useExisting: FormGroupDirective
  }]
})
export class SriCheckboxComponent implements OnInit, ControlValueAccessor {

  @Input() name: string | null;
  @Input() value: string;
  @Input() disabled: boolean;
  @Input() formControlName: string;
  @Input() viewOnly: boolean;
  @Output()
  changed: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.viewOnly = !!this.viewOnly;
    this.disabled = !!this.disabled;
  }


  writeValue(value: any): void {}

  registerOnChange(fn: any): void { }

  registerOnTouched(fn: any): void { }

  setDisabledState?(isDisabled: boolean): void { }

  changeEvent($event) {
    this.changed.emit($event);
  }
}
