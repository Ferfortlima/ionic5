import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-progressbar",
  templateUrl: "./progressbar.page.html",
  styleUrls: ["./progressbar.page.scss"],
})
export class ProgressbarPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  showPageHome() {
    this.navCtrl.navigateForward("home");
  }
}
