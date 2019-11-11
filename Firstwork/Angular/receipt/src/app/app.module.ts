import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from './layout/layout.module';

import { ErrorpageComponent } from './errorpage/errorpage.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './receipts/register/register.component';
import { ReceiptsModule } from './receipts/receipts.module';
import { ReceiptslistComponent } from './receipts/receiptslist/receiptslist.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorpageComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    ReceiptsModule,
    AuthModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
