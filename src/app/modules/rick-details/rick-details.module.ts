import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RickDetailsComponent } from './rick-details.component';

import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule
  ],
  declarations: [RickDetailsComponent]
})
export class RickDetailsModule { }
