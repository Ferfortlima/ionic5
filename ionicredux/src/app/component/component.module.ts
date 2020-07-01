import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { CustomCardComponent } from "./custom-card/custom-card.component";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [CustomCardComponent],
  declarations: [CustomCardComponent],
  providers: [CustomCardComponent],
})
export class ComponentModule {}
