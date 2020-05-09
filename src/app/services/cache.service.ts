import { LanguageService } from './language.service';
import { Card } from './../entities/card';
import { Category } from './../entities/category';
import { Settings } from './../entities/settings';
import { Injectable } from '@angular/core';
import s from './../../assets/settings.json';
import cat from 'src/assets/data/categories.json';
import c from 'src/assets/data/cards.json';


import { UIL, getUiLabel } from '../ui-labels';
import { LangData } from '../types/lang-data.enum';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  settings: Settings = s;
  allCategories: Category[] = cat;
  allCards: Card[] = c;
  curCards: Card[];
  curIndex: number;
  homeToken: boolean = false;

  constructor(public languageService: LanguageService) {
    console.log('Reading local json files');
    console.log(this.settings);
  }

  genCurCards(i: number) {
    if (i === 0) this.curCards = this.allCards;
    else {
      this.curCards = this.allCards.filter(c => c.catId === i);
    }
  }

  getNewCard(n: number): Card {
    this.curIndex += n;
    if (this.curIndex > this.curCards.length - 1) this.curIndex = 0;
    else if (this.curIndex < 0) this.curIndex = this.curCards.length - 1;
    return this.curCards[this.curIndex];
  }


  getUiLabel(key: UIL): string {
    return getUiLabel(key, this.settings.langUi);
  }

  getCategoryLabelFromId(i: number): string {
    if (i === 0) return this.getUiLabel(UIL.AllWords);
    return this.getCategoryLabelUi(this.getCategory(i));
  }

  getCategory(i: number): Category {
    return this.allCategories.find(cat => cat.id === i);
  }

  getCategoryLabelUi(cat: Category): string {
    return this.languageService.getCategoryLabel(cat, this.settings.langUi);
  }

  getCardFromId(id: number): Card {
    return this.allCards.find(c => c.id === id);
  }

  getCardLabelUi(card: Card): string {
    return this.languageService.getCardLabel(card, this.settings.langUi);
  }

  getDialectLang(ld: LangData): string {
    const i = this.settings.langSettings.find(l => l.langData === ld).langSpeechIndex;
    return this.languageService.getDialectLang(ld, i);
  }

  getLangLabelUi(l: LangData): string {
    return this.languageService.getLangLabel(l, this.settings.langUi);

  }

}
