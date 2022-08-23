import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[buhlerMachineStateColor]' })
export class MachineStateDirective {
  @Input() set state(value: 'Running' | 'Alarm' | 'Warning') {
    let color = '#dcdcdc';
    switch (value) {
      case 'Running':
        color = '#dcdcdc';
        break;
      case 'Alarm':
        color = '#fe333b';
        break;
      case 'Warning':
        color = '#ff9705';
        break;
    }

    this.el.nativeElement.style.backgroundColor = color;
  }

  constructor(private el: ElementRef) {}
}
