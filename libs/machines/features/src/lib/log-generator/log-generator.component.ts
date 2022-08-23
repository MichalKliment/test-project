import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { tap, timer } from 'rxjs';
import { LogGeneratorStore } from './log-generator.store';

@UntilDestroy()
@Component({
  selector: 'buhler-log-generator',
  templateUrl: 'log-generator.component.html',
  providers: [LogGeneratorStore],
})
export class LogGeneratorComponent implements OnInit {
  constructor(public logGeneratorStore: LogGeneratorStore) {}

  ngOnInit() {
    timer(1, 1000)
      .pipe(
        untilDestroyed(this),
        tap(() => this.logGeneratorStore.generateNewLog())
      )
      .subscribe();
  }
}
