import {ActionReducerMap} from '@ngrx/store/src/models';
import * as fromRouter from '@ngrx/router-store';
import {RouterStateUrl} from './custom-route-serializer';
import {createFeatureSelector} from '@ngrx/store';

export class State {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer
};

export const routerSelector = createFeatureSelector<State, fromRouter.RouterReducerState<RouterStateUrl>>('router');

export const {
  selectQueryParams,    // select the current route query params
  selectQueryParam,     // factory function to select a query param
  selectRouteParams,    // select the current route params
  selectRouteParam,     // factory function to select a route param
  selectRouteData,      // select the current route data
  selectUrl,            // select the current url
} = fromRouter.getSelectors(routerSelector);
