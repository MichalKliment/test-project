import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'buhler-machines-page',
  templateUrl: 'machines-page.component.html',
})
export class MachinesPageComponent {
  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  navigateToDetail(id: string) {
    this.router.navigate(['..', 'machines', id], {
      relativeTo: this.activatedRoute,
    });
  }
}
