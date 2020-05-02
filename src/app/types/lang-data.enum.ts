export enum LangData {
    cns = 1,
    cnt,
    en,
    de
}

const names: string[][] = [
['简体中文','簡體中文','S. Chinese','V. Chinesisch'],
['繁体中文','繁體中文','T. Chinese','T. Chinesisch'],
['英语','英語','English','Englisch'],
['德语','德語','German','Deutsch']
];

export function getLangDataLabel(lang: LangData): string {
    return names[lang - 1][lang - 1];
}

export function getLangDataLabelLocal(lang: LangData, i: LangData): string {
    return names[lang - 1][i - 1];
}