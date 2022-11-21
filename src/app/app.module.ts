import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiiListComponent } from './fii-list/fii-list.component';
import { FiiDetailsComponent } from './fii-details/fii-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FiiListComponent,
    FiiDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
