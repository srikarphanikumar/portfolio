import { NgModule } from '@angular/core';
import { SriCheckboxComponent } from './components/sri-checkbox/sri-checkbox.component';
import { SriInputComponent } from './components/sri-input/sri-input.component';
import { SriRadioComponent } from './components/sri-radio/sri-radio.component';
import { SriRadioGroupComponent } from './components/sri-radio-group/sri-radio-group.component';
import { SriSelectComponent } from './components/sri-select/sri-select.component';
import { MaterialModule } from '../material-module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SriButtonComponent } from './components/sri-button/sri-button.component';

@NgModule({
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  exports: [
    SriCheckboxComponent,
    SriInputComponent,
    SriRadioComponent,
    SriRadioGroupComponent,
    SriSelectComponent,
    SriButtonComponent
  ],
  declarations: [
    SriCheckboxComponent,
    SriInputComponent,
    SriRadioComponent,
    SriRadioGroupComponent,
    SriSelectComponent,
    SriButtonComponent
  ],
  providers: [],
})
export class LibraryModule { }
