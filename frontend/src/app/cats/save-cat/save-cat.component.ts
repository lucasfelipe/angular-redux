import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import * as fromStore from '../_store';
import {Actions} from '@ngrx/effects';
import {Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';
import {SuiModal} from 'ng2-semantic-ui';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-save-cat',
  templateUrl: './save-cat.component.html',
  styleUrls: ['./save-cat.component.sass']
})
export class SaveCatComponent implements OnInit, OnDestroy {

  @ViewChild('modal') modal: SuiModal<any, void, void>;

  private sub$ = new Subscription();

  public form: FormGroup = this.fb.group({
    text: [null],
    type: [null],
    upvotes: [null]
  });

  constructor(
    private fb: FormBuilder,
    private store: Store<fromStore.State>,
    private actions$: Actions,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub$.add(
      this.actions$.pipe(
        filter(action => Object.is(fromStore.ActionTypes.SAVE_CAT_SUCCESS, action.type))
      ).subscribe(() => {
        this.modal.approve();
      })
    );
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  public save() {
    const value = this.form.value;
    this.store.dispatch(new fromStore.SaveCatAction(value));
  }

  public back() {
    this.router.navigate(['.'], {relativeTo: this.route.parent});
  }

}
