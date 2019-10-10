import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs';
import * as fromActions from './cats.actions';
import {map, switchMap} from 'rxjs/operators';
import {CatsService} from '../_service/cats.service';
import {Cat} from '../_model/cat';

@Injectable()
export class CatsEffects {

  constructor(
    private actions$: Actions,
    private catsService: CatsService
  ) { }

  @Effect()
  loadCats$: Observable<Action> = this.actions$.pipe(
    ofType(fromActions.ActionTypes.LOAD_CATS),
    switchMap((action: fromActions.LoadCatsAction) =>
      this.catsService.getAll()
    ),
    map((data: Cat[]) => new fromActions.LoadCatsSuccessAction(data))
  );

}
