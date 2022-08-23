import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MachinesActions } from '@buhler/machines/domain';
import { Store } from '@ngrx/store';

@Component({
  selector: 'buhler-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    public store$: Store,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  // TODO: move to resolver
  ngOnInit() {
    this.store$.dispatch(MachinesActions.load());
  }

  navigateToDetail(id: string) {
    console.log(id);
    this.router.navigate(['..', 'machines', id], {
      relativeTo: this.activatedRoute,
    });
  }
}
