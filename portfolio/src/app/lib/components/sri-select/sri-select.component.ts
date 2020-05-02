import { 
  Component, 
  OnInit, 
  Input, 
  forwardRef, 
  Output, 
  EventEmitter, 
  ViewChild
} from '@angular/core';

import { 
  NG_VALUE_ACCESSOR, 
  ControlValueAccessor, 
  ControlContainer, 
  FormGroupDirective 
} from '@angular/forms';

import { MatSelect, MatSelectChange } from '@angular/material/select';
import { SelectOptions } from './select-option';

@Component({
  selector: 'app-sri-select',
  templateUrl: './sri-select.component.html',
  styleUrls: ['./sri-select.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SriSelectComponent),
    multi: true
  }],
  viewProviders: [{
    provide: ControlContainer, useExisting: FormGroupDirective
  }]
})
export class SriSelectComponent implements OnInit {

  @ViewChild(MatSelect) select: MatSelect;

  @Input() name: string;
  @Input() label: string;
  @Input() placehoder: string;
  @Input() value: string;
  @Input() disabled: boolean;
  @Input() formControlName: string;
  @Input() viewOnly: boolean;
  @Input() showBlank = false;
  @Input() selectedValue: string;
  @Input() options: Array<SelectOptions>;
  @Output()
  selectionChange: EventEmitter<MatSelectChange> = new EventEmitter<MatSelectChange>();

  constructor() { }

  ngOnInit() {
    this.viewOnly = !!this.viewOnly;
  }

  selectChange(event: any) {
    this.selectionChange.emit(event);
  }

  writeValue(value: any): void {}

  registerOnChange(fn: any): void {}

  registerOnTouched(fn: any): void {}

  setDisabledState?(isDisabled: boolean): void {}
}
