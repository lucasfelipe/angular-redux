import {Cat} from '../_model/cat';

export class State {
  loading: boolean;
  cats: Cat[];
}


export const initialState: State = {
  loading: false,
  cats: null
};
