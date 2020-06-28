import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { SidemenuComponent } from "./sidemenu/sidemenu.component";
import { AppRoutingModule } from "../app-routing.module";
import { RouteReuseStrategy } from "@angular/router";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, AppRoutingModule],
  exports: [SidemenuComponent],
  declarations: [SidemenuComponent],
  providers: [
    SidemenuComponent,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
})
export class ComponentModule {}
