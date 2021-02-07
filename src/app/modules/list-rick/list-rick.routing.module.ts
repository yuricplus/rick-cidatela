import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListRickComponent } from './list-rick.component';

const routes: Routes = [
  {
    path: '',
    component: ListRickComponent,
    data: {
      name: 'List',
      title: 'List'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ListRickRouting {}
