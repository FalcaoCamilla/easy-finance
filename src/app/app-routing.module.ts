import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountExtractComponent } from './account-extract/account-extract.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditTransactionComponent } from './edit-transaction/edit-transaction.component';
import { ExpenseComponent } from './expense/expense.component';
import { IntroduceTransactionComponent } from './introduce-transaction/introduce-transaction.component';
import { RevenueComponent } from './revenue/revenue.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'revenue', component: RevenueComponent},
  {path: 'expense', component: ExpenseComponent},
  {path: 'account', component: AccountExtractComponent},
  {path: 'introduce', component: IntroduceTransactionComponent},
  {path: 'edit', component: EditTransactionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
