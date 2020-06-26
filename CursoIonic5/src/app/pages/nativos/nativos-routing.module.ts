import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NativosPage } from './nativos.page';

const routes: Routes = [
  {
    path: '',
    component: NativosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NativosPageRoutingModule {}
