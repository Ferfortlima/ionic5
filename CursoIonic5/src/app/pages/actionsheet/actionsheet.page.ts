import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-actionsheet",
  templateUrl: "./actionsheet.page.html",
  styleUrls: ["./actionsheet.page.scss"],
})
export class ActionsheetPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  showPageHome() {
    this.navCtrl.navigateForward("home");
  }
}
