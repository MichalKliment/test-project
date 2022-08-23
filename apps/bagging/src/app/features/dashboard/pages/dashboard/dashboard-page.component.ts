import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'buhler-dashboard-page',
  templateUrl: 'dashboard-page.component.html',
})
export class DashboardPageComponent {
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
