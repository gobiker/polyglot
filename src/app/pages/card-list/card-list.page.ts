import { Card } from './../../entities/card';
import { CacheService } from './../../services/cache.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.page.html',
  styleUrls: ['./card-list.page.scss'],
})
export class CardListPage implements OnInit {

  catId: number;
  title: string;
  cards: Card[];

  constructor(public cacheService: CacheService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cacheService.genCurCards(id);
    this.cards = this.cacheService.curCards;
    this.title = this.cacheService.getCategoryLabelFromId(id);
    console.log("cards number: " + this.cacheService.curCards.length);

  }

  onClick(i: number) {
    this.cacheService.curIndex = i;
      //this.cacheService.curCards.findIndex(c => c.id === id);
      console.log("index: " + this.cacheService.curIndex);
      this.router.navigate(['/card']);
  }

}
