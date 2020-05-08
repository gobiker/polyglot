import { Card } from './../entities/card';
import { UIL, getUiLabel } from 'src/app/ui-labels';
import { LangData, getLangDataLabel, getLangDataLabelLocal } from './../types/lang-data.enum';
import { Injectable } from '@angular/core';
import { Category } from '../entities/category';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }

  getLangDataLabel(l: LangData): string {
    return getLangDataLabel(l);
  }
  getLangDataLabelLocal(l: LangData, i: LangData): string {
    return getLangDataLabelLocal(l, i);
  }

  getDialectList(l: LangData): number[] {
    if (l === LangData.de) return [0];
    else return [0, 1];
  }

  getLangLabel(l: LangData, ui: LangData): string {
    if (l === LangData.en) {
      return getUiLabel(UIL.English, ui);
    }
    if (l === LangData.cns) {
      return getUiLabel(UIL.ChineseS, ui);
    }
    if (l === LangData.cnt) {
      return getUiLabel(UIL.ChineseT, ui);
    }
    else return getUiLabel(UIL.German, ui);

  }

  getDialectLabel(l: LangData, ui: LangData, i: number): string {
    if (l === LangData.en) {
      if (i === 0) return getUiLabel(UIL.British, ui);
      else return getUiLabel(UIL.AmE, ui);
    }
    if (l === LangData.cns || l === LangData.cnt) {
      if (i === 0) return getUiLabel(UIL.Mandarin, ui);
      else return getUiLabel(UIL.Cantonese, ui);
    }

  }

  getDialectLang(l: LangData, i: number): string {
    if (l === LangData.en) {
      if (i === 0) return "en-GB";
      else return "en-US";
    }
    if (l === LangData.cns || l === LangData.cnt) {
      if (i === 0) return "zh-CN";
      else return "zh-HK";
    }
    if (l === LangData.de) return "de-DE";
  }

  getCardLabel(card: Card, lang: LangData): string {
    switch (lang) {
      case LangData.cns:
        return card.cns;
      case LangData.cnt:
        return card.cnt;
      case LangData.en:
        return card.en;
      case LangData.de:
        return card.de;
      default:
        return "";
    }
  }

  getCategoryLabel(cat: Category, l: LangData): string {
    switch (l) {
      case LangData.cns:
        return cat.cns;
      case LangData.cnt:
        return cat.cnt;
      case LangData.en:
        return cat.en;
      case LangData.de:
        return cat.de;

      default:
        return "";
    }
  }

  isChinese(l: LangData): boolean {
    return l === LangData.cns || l === LangData.cnt;
  }

  getWordArticle(card: Card, l: LangData): string {
    if (l === LangData.de) {
      switch (card.deGen) {
        case 1:
          return "der ";
        case 2:
          return "die ";
        case 3:
          return "das ";
      }
    }
    return "";
  }




}
