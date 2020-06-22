import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-badge",
  templateUrl: "./badge.page.html",
  styleUrls: ["./badge.page.scss"],
})
export class BadgePage implements OnInit {
  constructor(private navCtrl: NavController) {}
  badgeNumber: number = 100;

  ngOnInit() {}

  showPageHome() {
    this.navCtrl.navigateForward("home");
  }
}
