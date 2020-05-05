import { ScratchCardComponent } from './scratch-card/scratch-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Ng2FittextModule} from "ng2-fittext";
import { IonicModule } from '@ionic/angular';

import { CardPageRoutingModule } from './card-routing.module';

import { CardPage } from './card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2FittextModule,
    CardPageRoutingModule
  ],
  declarations: [CardPage,
  ScratchCardComponent]
})
export class CardPageModule {}
