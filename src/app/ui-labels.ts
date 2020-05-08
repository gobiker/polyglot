import { LangData } from './types/lang-data.enum';

export enum UIL {
  ChineseS,
  ChineseT,
  English,
  German,
  British,
  AmE,
  Mandarin,
  Cantonese,
  Menu,
  CardList,
  WordList,
  Settings,
  AddCard,
  Categories,
  UserTags,
  InputHanzi,
  Back,
  A_Z,
  ID,
  Random,
  Tags,
  DelLast,
  Delete,
  LangSetting,
  defaultSettingList,
  defaultSettingDetails,
  Hide,
  SpeechSpeed,
  LeniencyChinese,
  TraceOver,
  Dictation,
  Order,
  Outline,
  Write,
  Filter,
  AllWords,
  SelectAll,
  ClearAll,
  DisplayLang,
  Save,
  Cancel,
  DataSetting,
  DataLang,
  Aktive,
  DisplayOrder,
  DisplayImageInCard,
  DisplayImageInList,
  Noun,
  Verb,
  Adjective,
  InputAnyChinese,
  OnlyChinese,
  DeleteCard,
  AddWord,
  DeleteImage,
  DarkMode,
  Help,
  ScratchCardSettings,
  NewVersion

}

export function getUiLabel(key: UIL, lang: LangData): string {
  const w = UILABELS.find(o => o.id === key);
  if (!w) {
    return 'empty';
  }
  
  switch (lang) {
    case LangData.cns:
      return w.zh_CN;
    case LangData.cnt:
      return w.zh_TW;
    case LangData.de:
      return w.de;
    default:
      return w.en;
  }
}


export const UILABELS: { id: UIL, en: string, zh_CN: string, zh_TW: string, de: string }[] = [
  
  { id: UIL.ChineseS, en: 'S. Chinese', zh_CN: '简体中文', zh_TW: '簡體中文', de: 'V. Chinesisch' },
  { id: UIL.ChineseT, en: 'T. Chinese', zh_CN: '繁体中文', zh_TW: '繁體中文', de: 'T. Chinesisch' },
  { id: UIL.English, en: 'English', zh_CN: '英语', zh_TW: '英語', de: 'Englisch' },
  { id: UIL.German, en: 'German', zh_CN: '德语', zh_TW: '德語', de: 'Deutsch' },
  { id: UIL.British, en: 'British', zh_CN: '英式', zh_TW: '英式', de: 'Britisch' },
  { id: UIL.AmE, en: 'American', zh_CN: '美式', zh_TW: '美式', de: 'Amerikanische' },
  { id: UIL.Mandarin, en: 'Mandarin', zh_CN: '普通话', zh_TW: '國語', de: 'Mandarin' },
  { id: UIL.Cantonese, en: 'Cantonese', zh_CN: '粤语', zh_TW: '粵語', de: 'Kantonesisch' },

  { id: UIL.Menu, en: 'Menu', zh_CN: '目录', zh_TW: '目錄', de: 'Menü' },
  { id: UIL.CardList, en: 'Card List', zh_CN: '卡片列表', zh_TW: '卡片列表', de: 'Kartenliste' },
  { id: UIL.WordList, en: 'Word List', zh_CN: '单词列表', zh_TW: '單詞列表', de: 'Wortliste' },
  { id: UIL.Settings, en: 'Settings', zh_CN: '设置', zh_TW: '設定', de: 'Einstellungen' },
  { id: UIL.InputHanzi, en: 'Input Chinese', zh_CN: '自定义汉字', zh_TW: '自定義漢字', de: 'Chinesisches Zeichen' },
  { id: UIL.AddCard, en: 'New Card', zh_CN: '新建卡片', zh_TW: '新建卡片', de: 'Neue Karte' },
  { id: UIL.Categories, en: 'Categories', zh_CN: '类别', zh_TW: '類別', de: 'Kategorien' },
  { id: UIL.UserTags, en: 'Tags', zh_CN: '标签', zh_TW: '標籤', de: 'Stichworte' },


  { id: UIL.Back, en: 'back', zh_CN: '返回', zh_TW: '返回', de: 'Zurück' },
  { id: UIL.A_Z, en: 'A-Z', zh_CN: '字母', zh_TW: '字母', de: 'A-Z' },
  { id: UIL.ID, en: 'ID', zh_CN: '新旧', zh_TW: '新舊', de: 'ID' },
  { id: UIL.Random, en: 'random', zh_CN: '随机', zh_TW: '隨機', de: 'zufällig' },
  { id: UIL.Tags, en: 'tags', zh_CN: '标签', zh_TW: '標籤', de: 'Stichworte' },
  { id: UIL.DelLast, en: 'delete the last one', zh_CN: '删除最后一个', zh_TW: '刪除最後一個', de: 'den letzten löschen' },
  { id: UIL.Delete, en: 'delete', zh_CN: '删除', zh_TW: '刪除', de: 'löschen' },
  { id: UIL.LangSetting, en: 'language settings', zh_CN: '语言设置', zh_TW: '語言設定', de: 'Spracheinstellungen' },
  {
    id: UIL.defaultSettingList, en: 'default settings of list',
    zh_CN: '列表的默认设置', zh_TW: '列表的預設設定', de: 'Standardeinstellungen der Liste'
  },
  { id: UIL.Hide, en: 'hide', zh_CN: '遮蔽', zh_TW: '遮蔽', de: 'versteckt' },
  { id: UIL.SpeechSpeed, en: 'speed', zh_CN: '发音速度', zh_TW: '發音速度', de: 'Geschwindigkeit' },
  {
    id: UIL.LeniencyChinese, en: 'Error tolerance for chinese writing',
    zh_CN: '汉字练习容错率', zh_TW: '漢字練習容錯率', de: 'Fehlertoleranz für chinesische Schreibübungen'
  },
  {
    id: UIL.TraceOver, en: 'Trace Over', zh_CN: '描红', zh_TW: '描紅', de: 'nach Vorlage'
  },
  {
    id: UIL.Dictation, en: 'Dictation', zh_CN: '默写', zh_TW: '默寫', de: 'Diktat'
  },
  { id: UIL.Order, en: 'Demo', zh_CN: '笔顺', zh_TW: '筆順', de: 'Demo' },
  { id: UIL.Outline, en: 'Trace over', zh_CN: '描红', zh_TW: '描紅', de: 'nach Vorlage' },
  { id: UIL.Write, en: 'Dictation', zh_CN: '默写', zh_TW: '默寫', de: 'Diktat' },
  { id: UIL.Filter, en: 'filter', zh_CN: '词语筛选', zh_TW: '詞語篩選', de: 'Filter' },
  { id: UIL.SelectAll, en: 'select all', zh_CN: '全部选中', zh_TW: '全部選中', de: 'Alles aktivieren' },
  { id: UIL.ClearAll, en: 'clear all', zh_CN: '全部清除', zh_TW: '全部清除', de: 'Alles deaktivieren' },
  { id: UIL.DisplayLang, en: 'Display Language', zh_CN: '界面语言', zh_TW: '介面語言', de: 'Anzeigesprache' },
  { id: UIL.Save, en: 'Save', zh_CN: '保存', zh_TW: '保存', de: 'Speichen' },
  { id: UIL.Cancel, en: 'Cancel', zh_CN: '取消', zh_TW: '取消', de: 'Abrechen' },
  { id: UIL.DataSetting, en: 'Data Settings', zh_CN: '数据设置', zh_TW: '資料設定', de: 'Dateneinstellungen' },
  { id: UIL.DataLang, en: 'Data Language', zh_CN: '数据语言', zh_TW: '資料語言', de: 'Datensprache' },
  { id: UIL.Aktive, en: 'aktive', zh_CN: '启用', zh_TW: '啟用', de: 'Aktiv' },
  { id: UIL.DisplayOrder, en: 'Order', zh_CN: '显示顺序', zh_TW: '顯示順序', de: 'Reihenfolge' },
  { id: UIL.DisplayImageInCard, en: 'Card Image', zh_CN: '卡片图片', zh_TW: '卡片圖片', de: 'Kartenbild' },
  { id: UIL.DisplayImageInList, en: 'List Image', zh_CN: '列表图片', zh_TW: '列表圖片', de: 'ListenBild' },
  { id: UIL.Noun, en: 'noun', zh_CN: '名词', zh_TW: '名詞', de: 'Substantiv' },
  { id: UIL.Verb, en: 'verb', zh_CN: '动词', zh_TW: '動詞', de: 'Verb' },
  { id: UIL.Adjective, en: 'adjective', zh_CN: '形容词', zh_TW: '形容詞', de: 'Adjektiv' },
  {
    id: UIL.InputAnyChinese, en: 'Input any Chinese characters',
    zh_CN: '输入任意汉字', zh_TW: '輸入任意漢字', de: 'Geben Sie chinesische Schriftzeichen ein'
  },
  {
    id: UIL.OnlyChinese, en: 'Only Chinese characters allowed',
    zh_CN: '只允许中文字符', zh_TW: '只允許中文字符', de: 'Nur chinesische Schriftzeichen erlaubt'
  },
  { id: UIL.DeleteCard, en: 'Delete Card', zh_CN: '删除卡片', zh_TW: '刪除卡片', de: 'Karte löschen' },
  { id: UIL.AddWord, en: 'Add Word', zh_CN: '添加单词', zh_TW: '添加單詞', de: 'Wort hinzufügen' },
  { id: UIL.DeleteImage, en: 'Delete Image', zh_CN: '删除图像', zh_TW: '刪除圖像', de: 'Bild löschen' },
  { id: UIL.DarkMode, en: 'Dark Mode', zh_CN: '暗黑界面', zh_TW: '暗黑界面', de: 'Dark Mode' },
  { id: UIL.AllWords, en: 'All Words', zh_CN: '全部单词', zh_TW: '全部單詞', de: 'Alle Wörter' },
  { id: UIL.Help, en: 'Help', zh_CN: '帮助', zh_TW: '幫助', de: 'Hilfe' },
  { id: UIL.ScratchCardSettings, en: 'Scratch Card Settings', zh_CN: '刮刮卡设置', zh_TW: '刮刮卡設置', de: 'Rubbelkarteneinstellungen' },
  { id: UIL.NewVersion, en: 'New version available. Load New Version?', 
  zh_CN: '版本有更新, 加载新版本？', zh_TW: '版本有更新，加載新版本？', de: 'Neue Version verfügbar. Laden Sie neue Version?' },

];


