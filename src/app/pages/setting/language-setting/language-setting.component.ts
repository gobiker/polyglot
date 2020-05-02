import { LangData, getLangDataLabel } from './../../../types/lang-data.enum';
import { LangSetting } from './../../../entities/lang-setting';

import { Component, OnInit, Input } from '@angular/core';
import { UIL, getUiLabel } from 'src/app/ui-labels';

@Component({
  selector: 'app-language-setting',
  templateUrl: './language-setting.component.html',
  styleUrls: ['./language-setting.component.css']
})
export class LanguageSettingComponent implements OnInit {

  UIL = UIL;
  getUiLabel =getUiLabel;

  @Input() langSetting: LangSetting;
  @Input() langUi: LangData;

  ngOnInit() {
  }

  getLangLabel(): string {
    return getLangDataLabel(this.langSetting.langData);
  }

}
