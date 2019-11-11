import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { WithoutDropdownComponent } from './without-dropdown/without-dropdown.component';



@NgModule({
  declarations: [HeaderComponent, SidebarComponent, WithoutDropdownComponent],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports:[HeaderComponent,SidebarComponent,WithoutDropdownComponent]
})
export class LayoutModule { }
