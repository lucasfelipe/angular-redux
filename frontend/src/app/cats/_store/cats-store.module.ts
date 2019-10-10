import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import * as fromStore from '.';
import {EffectsModule} from '@ngrx/effects';
import {CatsEffects} from './cats.effects';

@NgModule({
  imports: [
    StoreModule.forFeature('cats', fromStore.reducer),
    EffectsModule.forFeature([CatsEffects])
  ]
})
export class CatsStoreModule { }
