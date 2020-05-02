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
  selector: 'sri-input',
  templateUrl: './sri-input.component.html',
  styleUrls: ['./sri-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SriInputComponent),
    multi: true
  }],
  viewProviders: [{
    provide: ControlContainer, useExisting: FormGroupDirective
  }]
})
export class SriInputComponent implements OnInit, ControlValueAccessor {

  @Input() label: string;
  @Input() placeholder: string;
  @Input() value: string;
  @Input() disabled: boolean;
  @Input() formControlName: string;
  @Input() maxLength: number;
  @Input() viewOnly: boolean;

  /** Event to be emitted when 
   * focus leaves the input text box
   */
  @Output()
  blur: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.viewOnly = !!this.viewOnly;
    this.disabled = !!this.disabled;
    this.maxLength = this.maxLength ? this.maxLength : 500;
  }

  /** Event Handler for focus out of element */
  onBlurMethod = ($event: any) => {
    this.value = $event.target.value;
    this.blur.emit($event);
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {}

  registerOnTouched(fn: any): void {}

  setDisabledState?(isDisabled: boolean): void {}
}
