import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-fab",
  templateUrl: "./fab.page.html",
  styleUrls: ["./fab.page.scss"],
})
export class FabPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  showPageHome() {
    this.navCtrl.navigateForward("home");
  }
}
