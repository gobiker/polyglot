import { Settings } from './../entities/settings';
import { Injectable } from '@angular/core';
import s from './../../assets/settings.json';
import { UIL, getUiLabel } from '../ui-labels';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  settings: Settings = s;
  constructor() {
    console.log('Reading local json files');
    console.log(this.settings);
   }

   getUiLabel(key: UIL): string {
    return getUiLabel(key, this.settings.langUi);
  }
}
