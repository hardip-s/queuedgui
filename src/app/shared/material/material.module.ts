import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatButtonModule, MatCheckboxModule,MatCardModule,MatGridListModule
  ],
  exports: [MatButtonModule, MatCheckboxModule,MatCardModule,MatGridListModule
  ]
})
export class MaterialModule { }
