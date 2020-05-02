import { LangSetting } from './lang-setting';
import { LangData } from '../types/lang-data.enum';


export class Settings {
    langUi: LangData;
    showImageList: boolean;
    showImageCard: boolean;
    miaohongLeniency: number;
    moxieLeniency: number;
    darkMode: boolean;
    langSettings: LangSetting[];



    constructor() {
        this.langUi = LangData.cns;
        this.showImageList = true;
        this.showImageCard = true;
        this.darkMode = true;
        this.miaohongLeniency = 0.7;
        this.moxieLeniency = 1;
    }


}
