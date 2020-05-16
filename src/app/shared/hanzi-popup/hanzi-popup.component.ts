import { CacheService } from './../../services/cache.service';
import { UIL } from '../../ui-labels';
import { AfterViewInit, Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { HanziStatus } from 'src/app/types/hanzi-status.enum';
import { NavParams, ModalController, Platform } from '@ionic/angular';
declare var require: any;
const HanziWriter = require('hanzi-writer');
//const pinyin = require('pinyin');

@Component({
  selector: 'app-hanzi-popup',
  templateUrl: './hanzi-popup.component.html',
  styleUrls: ['./hanzi-popup.component.css']
})
export class HanziPopupComponent implements AfterViewInit, OnInit {

  UIL = UIL;
  chars: string[];
  //pinyins: string[];
  curIndex = 0;
  writer: any;
  maxWidth: number;

  delayBetweenAnimations = 1000;

  curStatus: HanziStatus = HanziStatus.MiaoHong;


  hanziStatuses: { id: HanziStatus }[] = [
    { id: HanziStatus.BiShun },
    { id: HanziStatus.MiaoHong },
    { id: HanziStatus.MoXie }
  ];

  @ViewChild('chartarget') myDiv: ElementRef;
  constructor(
    public cacheService: CacheService,
    private navParams: NavParams,
    private modalCtrl: ModalController,
    private platform: Platform) {
  }

  ngOnInit() {
    const min = this.platform.width() > this.platform.height() ? this.platform.height() : this.platform.width();
    this.maxWidth = min * 0.8;
    const word = this.navParams.get('word');
    this.chars = word.split('');
    this.chars = this.chars.filter(v => /[\u4e00-\u9fa5]/.test(v));
    if (this.chars.length > 0) { this.curIndex = 0; }
    //this.pinyins = pinyin(this.chars.join(''));
  }

  ngAfterViewInit() {
    console.log('in ngAfterViewInit');
    this.writer = HanziWriter.create(this.myDiv.nativeElement, this.chars[this.curIndex], {
      width: this.maxWidth,
      height: this.maxWidth,
      padding: 5,
      showCharacter: false,
      showOutline: false
    });
    this.miaoHong();

  }

  //for HTML event
  onChangeChar(i: number): void {
    console.log('in onChangeChar() ' + i);
    this.curIndex += i;
    this.runChar();
  }

  //for HTML event
  onStatusChange(st: string) {
    console.log('in onStatusChange() ');
    this.curStatus = +st;
    this.runChar();
  }

  //for HTML 
  inMoXie(): boolean {
    return this.curStatus === HanziStatus.MoXie;
  }


  runChar(): void {
    const zi = this.chars[this.curIndex];
    console.log('in runChar() ' + zi);

    this.writer.setCharacter(zi);
    switch (this.curStatus) {
      case HanziStatus.MiaoHong:
        this.miaoHong();
        break;
      case HanziStatus.BiShun:
        setTimeout(() => {
          this.biShun();
        }, this.delayBetweenAnimations);
        break;
      case HanziStatus.MoXie:
        this.moXie();
        break;
    }
  }


  private biShun() {
    console.log('in biShun() ');
    this.writer.hideCharacter();
    this.writer.showOutline();
    this.writer.animateCharacter(
    //  {onComplete: this.runNextCharDelay.bind(this)}
    );
  }

  private miaoHong(): void {
    console.log('in miaoHong() ');
    this.writer.hideCharacter();
    this.writer.showOutline();
    this.writer.quiz(
      {
        leniency: this.cacheService.settings.miaohongLeniency,
        onComplete: this.quizNext.bind(this)
      });
  }


  private moXie() {
    console.log('in moXie() ');
    this.writer.hideCharacter();
    this.writer.hideOutline();
    this.writer.quiz(
      {
        leniency: this.cacheService.settings.moxieLeniency,
        onComplete: this.quizNext.bind(this)
      });
  }

  quizNext(summaryData) {
    console.log('You did it! You finished drawing ' + summaryData.character);
    console.log('You made ' + summaryData.totalMistakes + ' total mistakes on this quiz');
    setTimeout(() => {
      console.log('after 2s');
      this.runNextChar();
    }, this.delayBetweenAnimations);
  }
  
  //for HTML event
  runNextChar() {
    if (this.curIndex >= this.chars.length - 1) {
      this.curIndex = 0;
    }
    else {
      this.curIndex++;
    }
    this.runChar();
  }

  //for HTML event
  runLastChar() {
    if (this.curIndex === 0) {
      this.curIndex = this.chars.length - 1;
    }
    else {
      this.curIndex--;
    }
    this.runChar();
  }

  goBack(): void {
    this.modalCtrl.dismiss();
  }


  getStatusLabel(s: HanziStatus) {
    switch (s) {
      case HanziStatus.BiShun:
        return this.cacheService.getUiLabel(UIL.Demo);
      case HanziStatus.MiaoHong:
        return this.cacheService.getUiLabel(UIL.TraceOver);
      case HanziStatus.MoXie:
        return this.cacheService.getUiLabel(UIL.Dictation);
    }
  }
}
