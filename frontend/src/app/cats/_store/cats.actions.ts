import {type} from '../../store/utils';
import {Action} from '@ngrx/store';
import {Cat} from '../_model/cat';

export const ActionTypes = {
  LOAD_CATS: type('[CATS] LOAD_CATS'),
  LOAD_CATS_SUCCESS: type('[CATS] LOAD_CATS_SUCCESS')
};

export class LoadCatsAction implements Action {
  readonly type = ActionTypes.LOAD_CATS;

  constructor(public payload?) { }
}

export class LoadCatsSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_CATS_SUCCESS;

  constructor(public payload: Cat[]) { }
}

export type CatsActions = LoadCatsAction | LoadCatsSuccessAction;
