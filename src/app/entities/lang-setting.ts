import { LangData } from './../types/lang-data.enum';
export class LangSetting {
    langData: LangData;
    langSpeechIndex: number;
    speakRate: number;
    hide: boolean;
    active: boolean;


    constructor(ld: LangData, lsi:number, sr:number, hide: boolean, act: boolean) {
        this.langData = ld;
        this.langSpeechIndex = lsi;
        this.speakRate = sr;
        this.hide = hide;
        this.active = act;
    }
}
