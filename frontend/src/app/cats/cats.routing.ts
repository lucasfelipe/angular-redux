import {Route, RouterModule} from '@angular/router';
import {CatsComponent} from './cats.component';
import {NgModule} from '@angular/core';
import {LoadCatsResolver} from './_resolvers/load-cats.resolver';

const routes: Route[] = [
  {path: '', component: CatsComponent, resolve: {cats: LoadCatsResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [LoadCatsResolver]
})
export class CatsRoutingModule { }
