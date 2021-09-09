import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


const materialModules = [
  CommonModule,MatButtonModule, MatCheckboxModule,MatCardModule,MatGridListModule,
  MatFormFieldModule,MatInputModule
];


@NgModule({
  declarations: [],
  imports: [...materialModules ],
  exports: [...materialModules]
})
export class MaterialModule { }
