import * as fromCatsReducer from './cats.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export class State {
  cats: fromCatsReducer.State;
}

export * from './cats.actions';
export * from './cats.reducer';

export const getCatsState = createFeatureSelector<fromCatsReducer.State>('cats');
export const getSelectedCatsLoading = createSelector(getCatsState, fromCatsReducer.getLoading);
export const getSelectedCatsCats = createSelector(getCatsState, fromCatsReducer.getCats);
