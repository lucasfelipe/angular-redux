import {Route, RouterModule} from '@angular/router';
import {CatsComponent} from './cats.component';
import {NgModule} from '@angular/core';
import {LoadCatsResolver} from './_resolvers/load-cats.resolver';
import {SaveCatComponent} from './save-cat/save-cat.component';

const routes: Route[] = [
  {path: '', component: CatsComponent, resolve: {cats: LoadCatsResolver}},
  {path: 'new', component: SaveCatComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [LoadCatsResolver]
})
export class CatsRoutingModule { }
