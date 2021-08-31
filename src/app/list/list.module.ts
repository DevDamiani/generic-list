import { ItemComponent } from './item/item.component';
import { ListComponent } from './list.component';

import { HttpClientModule  } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    ListComponent,
    ItemComponent
  ]
})
export class ListModule { }
