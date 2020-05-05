import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';

declare var require: any;
const Scratchcard = require('scratchcard');

@Component({
  selector: 'app-scratch-card',
  templateUrl: './scratch-card.component.html',
  styleUrls: ['./scratch-card.component.css']
})
export class ScratchCardComponent implements OnInit, AfterViewInit {

  @Input() word: string;
  @Input() scratch: boolean;
  scratchcard;

  @ViewChild('card') cardDiv: ElementRef;
  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    if (this.scratch) {
      this.scratchcard = new Scratchcard(this.cardDiv.nativeElement);
    }
  }


  onDelete() {
    this.scratchcard.setElement(null);
  }


  onAddCanvas() {
    this.scratchcard = new Scratchcard(this.cardDiv.nativeElement);
  }
}
