import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Cat} from '../_model/cat';
import {Observable, of, Subscription} from 'rxjs';
import * as fromStore from '../_store';
import {select, Store} from '@ngrx/store';
import * as _ from 'lodash';
import {filter, take} from 'rxjs/operators';

@Injectable()
export class LoadCatsResolver implements Resolve<Cat[]> {


  constructor(
    private store: Store<fromStore.State>
  ) { }

  resolve(): Observable<Cat[]> {
    this.init();
    return of(null);
  }

  private init() {
    this.store.dispatch(new fromStore.LoadCatsAction());
  }

}
