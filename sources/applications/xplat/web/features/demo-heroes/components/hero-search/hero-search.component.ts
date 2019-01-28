import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';

import { Hero } from '../../models/hero.interfaces';
import { HeroService } from '../../services';

import { HeroSearchBaseComponent } from '@application/features';

@Component({
  selector: 'app-hero-search',
  templateUrl: 'hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent extends HeroSearchBaseComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {
    super();
  }
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term))
    );
  }
}
