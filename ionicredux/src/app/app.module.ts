import { MenuPageModule } from "./pages/menu/menu.module";
import { ComponentModule } from "./component/component.module";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { categoryReducer } from "./reducers/categoryReducer";
import { countryReducer } from "./reducers/countryReducer";
import { MenuPage } from "./pages/menu/menu.page";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [MenuPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ComponentModule,
    MenuPageModule,
    StoreModule.forRoot({
      catMenu: categoryReducer,
      country: countryReducer,
    }),
  ],
  providers: [
    MenuPage,
    StatusBar,
    SplashScreen,
    MenuPage,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
