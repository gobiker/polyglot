import { LangData, getLangDataLabelLocal } from './../../types/lang-data.enum';
import { CacheService } from './../../services/cache.service';
import { LanguageService } from './../../services/language.service';
import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { UIL, getUiLabel } from 'src/app/ui-labels';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  UIL = UIL;
  //settings: Settings;

  constructor(private location: Location,
    public languageService: LanguageService,
    public cacheService: CacheService
  ) { }

  ngOnInit() {
  }

  getUiLabel(key: UIL): string {
    return getUiLabel(key, this.cacheService.settings.langUi);
  }

  getLangLabel(lang: LangData) {
    return getLangDataLabelLocal(lang, this.cacheService.settings.langUi);
  }

  private save() {
    console.log('save settings');
  }

  goBack(): void {
    this.save();
    this.location.back();
  }

  doReorder(ev: any) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete(this.cacheService.settings.langSettings);
  }

  onChangeDarkMode(){
    
    document.body.classList.toggle('dark', this.cacheService.settings.darkMode);
 
  }

}
