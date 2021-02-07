import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRickComponent } from './list-rick.component';
import { ComponentModule } from '../../../shared/components/component.module';
import { ListRickRouting } from './list-rick.routing.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentModule,
    ListRickRouting
  ],
  declarations: [ListRickComponent],
  schemas: []
})
export class ListRickModule { }
