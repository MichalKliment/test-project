import { Component } from '@angular/core';
import { map, timer } from 'rxjs';
import { ActualTimeService } from './actual-time.service';

@Component({
  selector: 'buhler-actual-time',
  templateUrl: 'actual-time.component.html',
})
export class ActualTimeComponent {

  constructor(public actualTimeService: ActualTimeService) {}
}
