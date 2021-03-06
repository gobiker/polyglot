import { UIL } from 'src/app/ui-labels';
import { CacheService } from './../../services/cache.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  UIL = UIL;
  constructor(public cacheService: CacheService) {
    document.body.classList.toggle('dark', this.cacheService.settings.darkMode);
    this.cacheService.curCards = [];
    this.cacheService.curIndex = 0;
    this.cacheService.homeToken = true;

  }

  onClick() {

  }
}
