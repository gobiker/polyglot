import { HanziPopupComponent } from './hanzi-popup/hanzi-popup.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { DebounceClickDirective } from './debounce-click.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [SharedComponent, DebounceClickDirective, HanziPopupComponent],
  exports: [DebounceClickDirective, HanziPopupComponent],

})
export class SharedModule { }
