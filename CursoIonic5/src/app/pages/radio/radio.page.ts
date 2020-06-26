import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-radio",
  templateUrl: "./radio.page.html",
  styleUrls: ["./radio.page.scss"],
})
export class RadioPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}
  showPageHome() {
    this.navCtrl.navigateForward("home");
  }
}
