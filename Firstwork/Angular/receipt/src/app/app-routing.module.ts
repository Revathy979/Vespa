import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { RegisterComponent } from './receipts/register/register.component';
import { ReceiptslistComponent } from './receipts/receiptslist/receiptslist.component';
import { GridviewComponent } from './receipts/gridview/gridview.component';
import { EditReceiptComponent } from './receipts/edit-receipt/edit-receipt.component';
import { RegisterPageComponent } from './auth/register-page/register-page.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeGuard } from './guards/home.guard';


const routes: Routes = [

  {
    path: '', component: HomeComponent, canActivate:[HomeGuard]
  },
  {
    path: 'receipts/new', component: RegisterComponent
  },
  {
    path: 'receipts/list', component: ReceiptslistComponent
  },
  {
    path: 'receipts/grid', component: GridviewComponent
  },
  {
    path: 'receipts/edit/:id', component: EditReceiptComponent
  },
  {
    path: 'receipts/register', component: RegisterPageComponent
  },
  {
    path: 'receipts/login', component: LoginComponent,canActivate:[AuthGuard]

  },
  {
    path: '**', component: ErrorpageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
