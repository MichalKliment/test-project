import { Injectable } from '@angular/core';
import { map, shareReplay, timer } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ActualTimeService {
  /**
   * shared time for all subscribes
   */
  actualTime$ = timer(0, 1000).pipe(
    map(() => new Date()),
    shareReplay()
  );
}
