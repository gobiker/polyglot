import { CacheService } from './../../services/cache.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public cacheService: CacheService) {
    document.body.classList.toggle('dark', this.cacheService.settings.darkMode);

  }

  onClick() {
    
  }
}
