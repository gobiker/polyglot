import { LangData } from './../../../types/lang-data.enum';
import { UIL } from './../../../ui-labels';
import { CacheService } from './../../../services/cache.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  templateUrl: './setting-help.component.html',
  styleUrls: ['./setting-help.component.css']
})
export class SettingHelpComponent implements OnInit {

  UIL = UIL;
  LangData=LangData;
  
  constructor(private modalCtrl: ModalController,
    public cacheService: CacheService
  ) { }

  ngOnInit(): void {
  }

  onClose(): void {
    this.modalCtrl.dismiss();
  }
}
