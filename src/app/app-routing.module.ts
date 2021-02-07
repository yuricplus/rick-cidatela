import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { HistoricRickComponent } from './modules/historic-rick/historic-rick.component';
import { ListRickComponent } from './modules/list-rick/list-rick.component';
import { RickDetailsComponent } from './modules/rick-details/rick-details.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListRickComponent
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'details/:id',
    component: RickDetailsComponent
  },
  {
    path: 'historic/:id',
    component: HistoricRickComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {paramsInheritanceStrategy: 'always', preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
