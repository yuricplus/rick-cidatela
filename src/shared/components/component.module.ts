import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsComponent } from './cards/cards.component';
import { PaginationComponent } from './pagination/pagination.component';

const declarations = [
  CardsComponent,
  PaginationComponent
]

@NgModule({
  declarations: declarations,
  imports: [
    CommonModule
  ],
  exports: declarations,
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class ComponentModule { }
