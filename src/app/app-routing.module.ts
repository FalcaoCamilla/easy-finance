import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountExtractComponent } from './account-extract/account-extract.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IntroduceExpenseComponent } from './introduce-expense/introduce-expense.component';
import { IntroduceRevenueComponent } from './introduce-revenue/introduce-revenue.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'revenue', component: IntroduceRevenueComponent},
  {path: 'expense', component: IntroduceExpenseComponent},
  {path: 'account', component: AccountExtractComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
