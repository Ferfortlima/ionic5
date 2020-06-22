import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-chip",
  templateUrl: "./chip.page.html",
  styleUrls: ["./chip.page.scss"],
})
export class ChipPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  showPageHome() {
    this.navCtrl.navigateForward("home");
  }
}
