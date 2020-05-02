import { UIL, getUiLabel } from 'src/app/ui-labels';
import { LangData, getLangDataLabel, getLangDataLabelLocal } from './../types/lang-data.enum';
import { LangSetting } from './../entities/lang-setting';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  langSettings: LangSetting[];
  constructor() { }

  getActiveLanguages(): LangSetting[] {
    return this.langSettings.filter(o => o.active);
  }

  getAllLanguages(): LangSetting[] {
    return this.langSettings;
  }

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


}
