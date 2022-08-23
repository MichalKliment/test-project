import { Component, OnInit } from '@angular/core';
import { MachinesActions } from '@buhler/machines/domain';
import { Store } from '@ngrx/store';

@Component({
  selector: 'buhler-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // TODO: move to resolver
  constructor(public store$: Store) {}
  ngOnInit() {
    this.store$.dispatch(MachinesActions.load());
  }
}
