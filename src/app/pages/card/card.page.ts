import { Word } from './../../entities/word';
import { Card } from './../../entities/card';
import { LanguageService } from './../../services/language.service';
import { CacheService } from './../../services/cache.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HanziPopupComponent } from 'src/app/shared/hanzi-popup/hanzi-popup.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {

  //index: number;
  words: Word[];

  constructor(private modalController: ModalController,
    public cacheService: CacheService,
    public languageService: LanguageService,
    private router: Router) { }

  ngOnInit() {
    this.genWords(this.cacheService.getNewCard(0));
  }

  genWords(card: Card) {
    this.words = [];
    this.cacheService.settings.langSettings.forEach(l => {
      if (l.active) {
        let word: Word = new Word();
        word.content = this.languageService.getCardLabel(card, l.langData);
        word.speechCounter = 0;
        word.isChinese = this.languageService.isChinese(l.langData);
        word.article = this.languageService.getWordArticle(card, l.langData);
        word.langSpeech = this.cacheService.getDialectLang(l.langData);
        word.langData = l.langData;
        word.hide = l.hide;
        this.words.push(word);
      }
    });
  }

  reloadPage() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/card']);
}

  nextCard() {
    this.genWords(this.cacheService.getNewCard(1));
    this.reloadPage();
  }

  lastCard() {
    this.genWords(this.cacheService.getNewCard(-1));
    this.reloadPage();
  }

  onClickSpeech(w: Word) {
    var msg = new SpeechSynthesisUtterance();
    if (w.speechCounter === 0) msg.rate = 0.9;
    else {
      msg.rate = 0.6;
    }
    msg.text = w.article + w.content;
    msg.lang = w.langSpeech;
    speechSynthesis.speak(msg);
    w.speechCounter = w.speechCounter === 1 ? 0 : 1;
    console.log(JSON.stringify(w));

  }


  async onClickChinese(z: string) {
    if (z === '') {
      return;
    }
    const modal = await this.modalController.create({
      component: HanziPopupComponent,
      componentProps: { word: z },
      cssClass: "modal-fullscreen"
    });
    return await modal.present();
  }

}
