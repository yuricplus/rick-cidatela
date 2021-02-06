import { NgModule } from '@angular/core';
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
  exports: declarations
})
export class ComponentModule { }
