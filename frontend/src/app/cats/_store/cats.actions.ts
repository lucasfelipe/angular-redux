import {type} from '../../store/utils';
import {Action} from '@ngrx/store';
import {Cat} from '../_model/cat';

export const ActionTypes = {
  LOAD_CATS: type('[CATS] LOAD_CATS'),
  LOAD_CATS_SUCCESS: type('[CATS] LOAD_CATS_SUCCESS'),
  SAVE_CAT: type('[CATS] SAVE_CAT'),
  SAVE_CAT_SUCCESS: type('[CATS] SAVE_CAT_SUCCESS')
};

export class LoadCatsAction implements Action {
  readonly type = ActionTypes.LOAD_CATS;

  constructor(public payload?) { }
}

export class LoadCatsSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_CATS_SUCCESS;

  constructor(public payload: Cat[]) { }
}

export class SaveCatAction implements Action {
  readonly type = ActionTypes.SAVE_CAT;

  constructor(public payload: Cat) { }
}

export class SaveCatSuccessAction implements Action {
  readonly type = ActionTypes.SAVE_CAT_SUCCESS;

  constructor(public payload: Cat) { }
}

export type CatsActions = LoadCatsAction | LoadCatsSuccessAction | SaveCatAction | SaveCatSuccessAction;
