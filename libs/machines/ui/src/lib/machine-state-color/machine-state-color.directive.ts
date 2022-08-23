import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[buhlerMachineStateColor]' })
export class MachineStateDirective {
  @Input() set state(value: 'Running' | 'Alarm' | 'Warning') {
    let bgColor = '#dcdcdc';
    let txtColor = '#dcdcdc';
    switch (value) {
      case 'Running':
        bgColor = '#dcdcdc';
        txtColor = 'inherit';
        break;
      case 'Alarm':
        bgColor = '#fe333b';
        txtColor = '#FFF';
        break;
      case 'Warning':
        bgColor = '#ff9705';
        txtColor = '#FFF';
        break;
    }

    this.el.nativeElement.style.backgroundColor = bgColor;
    this.el.nativeElement.style.color = txtColor;
  }

  constructor(private el: ElementRef) {}
}
