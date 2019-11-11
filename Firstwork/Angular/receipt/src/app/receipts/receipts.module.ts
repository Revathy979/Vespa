import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { ReceiptslistComponent } from './receiptslist/receiptslist.component';
import { LayoutModule } from '../layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GridviewComponent } from './gridview/gridview.component';
import { RouterModule } from '@angular/router';
import { EditReceiptComponent } from './edit-receipt/edit-receipt.component';



@NgModule({
  declarations: [RegisterComponent, ReceiptslistComponent, GridviewComponent, EditReceiptComponent],
  imports: [
    LayoutModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    CommonModule
  ],
  exports:[RegisterComponent,ReceiptslistComponent,GridviewComponent,EditReceiptComponent]

})
export class ReceiptsModule { }
