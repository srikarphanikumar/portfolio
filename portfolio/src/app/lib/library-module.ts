import { NgModule } from '@angular/core';
import { SriCheckboxComponent } from './components/sri-checkbox/sri-checkbox.component';
import { SriInputComponent } from './components/sri-input/sri-input.component';
import { SriRadioComponent } from './components/sri-radio/sri-radio.component';
import { SriRadioGroupComponent } from './components/sri-radio-group/sri-radio-group.component';
import { SriSelectComponent } from './components/sri-select/sri-select.component';

@NgModule({
  imports: [],
  exports: [
    SriCheckboxComponent,
    SriInputComponent,
    SriRadioComponent,
    SriRadioGroupComponent,
    SriSelectComponent
  ],
  declarations: [
    SriCheckboxComponent,
    SriInputComponent,
    SriRadioComponent,
    SriRadioGroupComponent,
    SriSelectComponent
  ],
  providers: [],
})
export class LibraryModule { }
