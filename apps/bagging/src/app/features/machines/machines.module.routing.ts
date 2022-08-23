import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MachineDetailPageComponent, MachinesPageComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: MachinesPageComponent,
  },
  {
    path: ':machineId',
    component: MachineDetailPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachinesRoutingModule {}
