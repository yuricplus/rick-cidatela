import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListRickModule } from './modules/list-rick/list-rick.module';
import { RouterModule } from '@angular/router';
import { HistoricRickModule } from './modules/historic-rick/historic-rick.module';
import { RickDetailsModule } from './modules/rick-details/rick-details.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ListRickModule,
    RouterModule,
    HistoricRickModule,
    RickDetailsModule,
    NoopAnimationsModule
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
