// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HttpClientModule } from '@angular/common/http';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IntroduceRevenueComponent } from './introduce-revenue/introduce-revenue.component';
import { IntroduceExpenseComponent } from './introduce-expense/introduce-expense.component';
import { AccountExtractComponent } from './account-extract/account-extract.component';

// PrimeNG
import { MenuModule } from 'primeng/menu';





@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    DashboardComponent,
    IntroduceRevenueComponent,
    IntroduceExpenseComponent,
    AccountExtractComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MenuModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
