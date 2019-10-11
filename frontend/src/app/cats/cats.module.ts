import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsComponent } from './cats.component';
import {CatsRoutingModule} from './cats.routing';
import {CatsService} from './_service/cats.service';
import {HttpClientModule} from '@angular/common/http';
import {SuiMessageModule, SuiModalModule} from 'ng2-semantic-ui';
import {CatsStoreModule} from './_store/cats-store.module';
import { SaveCatComponent } from './save-cat/save-cat.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [CatsComponent, SaveCatComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CatsRoutingModule,
    HttpClientModule,
    SuiModalModule,
    CatsStoreModule,
    SuiMessageModule
  ],
  providers: [CatsService]
})
export class CatsModule { }
