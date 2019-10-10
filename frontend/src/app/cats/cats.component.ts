import { Component, OnInit } from '@angular/core';
import * as fromStore from './_store';
import {Cat} from './_model/cat';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.sass']
})
export class CatsComponent implements OnInit {
  public loading$ = this.store.select(fromStore.getSelectedCatsLoading);
  public cats: Cat[] = [];

  constructor(
    private store: Store<fromStore.State>
  ) { }

  ngOnInit() {
    this.store
      .select(fromStore.getSelectedCatsCats)
      .subscribe((data: Cat[]) => this.cats = data);
  }

}
