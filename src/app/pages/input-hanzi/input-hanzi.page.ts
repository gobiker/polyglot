import { CacheService } from './../../services/cache.service';
import { UIL } from './../../ui-labels';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HanziPopupComponent } from 'src/app/shared/hanzi-popup/hanzi-popup.component';

@Component({
  selector: 'app-input-hanzi',
  templateUrl: './input-hanzi.page.html',
  styleUrls: ['./input-hanzi.page.scss'],
})
export class InputHanziPage {

  UIL = UIL;
  zis = '';
  constructor(private modalController: ModalController,
    public cacheService: CacheService) { }

  async onClick() {
    if (this.zis === '') {
      return;
    }
    const modal = await this.modalController.create({
      component: HanziPopupComponent,
      componentProps: { word: this.zis },
      cssClass: "modal-fullscreen"
    });
    return await modal.present();
  }
}
