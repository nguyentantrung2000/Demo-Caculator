import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TableComponent } from './components/table/table.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DetailComponent } from './components/table/component/detail/detail.component';
import { StoreModule } from '@ngrx/store';

import { CalcuReducer, counterReducer } from './ ngrx/reducers/counter.reducers';
import { CalcuComponent } from './components/calcu/calcu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TableComponent,
    DetailComponent,
    CalcuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    StoreModule.forRoot({
      counter: counterReducer,
      calculator: CalcuReducer
    }, {})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
