import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { MealsPageRoutingModule } from "./meals-routing.module";

import { MealsPage } from "./meals.page";
import { ComponentModule } from "src/app/component/component.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MealsPageRoutingModule,
    ComponentModule,
  ],
  declarations: [MealsPage],
})
export class MealsPageModule {}
