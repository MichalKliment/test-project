import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';

@Injectable()
export class LogsEffects {
  constructor(private _store$: Store<never>, private _actions: Actions) {}
}
