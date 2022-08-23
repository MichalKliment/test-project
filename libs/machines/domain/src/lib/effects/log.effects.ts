import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';

@Injectable()
export class CookieBarEffects {
  // onInitCookieBar$ = createEffect(
  //   () =>
  //     this._actions.pipe(
  //       ofType(CookieActions.initCookie),
  //       map((action) => {
  //         return CookieActions.detectCookie({
  //           detected: true,
  //           enable:
  //             this.cookieService.get(
  //               this.configurationService.get('cookieBarKey') || 'cookieBarKey'
  //             ) == 'agree'
  //               ? true
  //               : null,
  //         });
  //       })
  //     ),
  //   { dispatch: true }
  // );

  constructor(private _store$: Store<any>, private _actions: Actions) {}
}
