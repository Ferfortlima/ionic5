import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { AppComponent } from "src/app/app.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  constructor(
    private navCtrl: NavController,
    private appComponent: AppComponent
  ) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.appComponent.selectedIndex = 0;
  }

  goToPage(page) {
    var screenSelected = this.appComponent.appPages.findIndex(
      (screen) => screen.url === "/" + page
    );
    this.appComponent.selectedIndex = screenSelected;
    this.navCtrl.navigateForward(page);
  }
}
