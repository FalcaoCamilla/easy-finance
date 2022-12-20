// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RevenueComponent } from './revenue/revenue.component';
import { ExpenseComponent } from './expense/expense.component';
import { AccountExtractComponent } from './account-extract/account-extract.component';

// PrimeNG
import { MenuModule } from 'primeng/menu';
import { CardModule } from "primeng/card";
import { ChartModule } from 'primeng/chart';
import { PanelModule } from 'primeng/panel';
import { IntroduceTransactionComponent } from './introduce-transaction/introduce-transaction.component';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table'

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    DashboardComponent,
    RevenueComponent,
    ExpenseComponent,
    AccountExtractComponent,
    IntroduceTransactionComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MenuModule,
    HttpClientModule,
    CardModule,
    ChartModule,
    PanelModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    RadioButtonModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
