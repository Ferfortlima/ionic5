import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-datetime",
  templateUrl: "./datetime.page.html",
  styleUrls: ["./datetime.page.scss"],
})
export class DatetimePage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  showPageHome() {
    this.navCtrl.navigateForward("home");
  }
}
