import { LangData } from './../types/lang-data.enum';
export class Word {
    content: string;
    article: string;
    langSpeech: string;
    speechCounter: number;
    isChinese: boolean;
    langData: LangData;
    hide: boolean
}