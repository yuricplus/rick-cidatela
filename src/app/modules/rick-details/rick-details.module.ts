import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RickDetailsComponent } from './rick-details.component';
@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [RickDetailsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RickDetailsModule { }
