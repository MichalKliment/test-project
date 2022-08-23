import { Component } from '@angular/core';
import { map, timer } from 'rxjs';

@Component({
  selector: 'buhler-actual-time',
  templateUrl: 'actual-time.component.html',
})
export class ActualTimeComponent {
  actualTime$ = timer(0, 1000).pipe(
    map(() => {
      return new Date();
    })
  );
}
