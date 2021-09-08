# MyApp


## Install Angular Material

npm install --save @angular/material @angular/cdk @angular/animations

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


### This OR ....
@NgModule({
  ...
  imports: [BrowserAnimationsModule],
  ...
})
export class PizzaPartyAppModule { }


### OR this ....

You can then include this module wherever you'd like to use the components.

import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule],
  exports: [MatButtonModule, MatCheckboxModule],
})
export class MyOwnCustomMaterialModule { }


### Including a theme is required
you can add this to your styles.css:
@import "~@angular/material/prebuilt-themes/indigo-pink.css";

### material icons
If you want to use the mat-icon component with the official Material Design Icons, load the icon font in your index.html.

<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">