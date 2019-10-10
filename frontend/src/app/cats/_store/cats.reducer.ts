import * as CatsState from './cats.state';
import * as CatsAction from './cats.actions';

export class State extends CatsState.State { }

const initialState: CatsState.State = CatsState.initialState;

export function reducer(state = initialState, action: CatsAction.CatsActions): CatsState.State {
  switch (action.type) {
    case CatsAction.ActionTypes.LOAD_CATS: {
      return {
        ...state,
        loading: true
      };
    }
    case CatsAction.ActionTypes.LOAD_CATS_SUCCESS: {
      const { payload } = action;
      return {
        ...state,
        loading: false,
        cats: payload
      };
    }
    default:
      return state;
  }
}

export const getLoading = (state: CatsState.State) => state.loading;
export const getCats = (state: CatsState.State) => state.cats;
