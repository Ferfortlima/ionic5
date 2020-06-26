import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-toggle",
  templateUrl: "./toggle.page.html",
  styleUrls: ["./toggle.page.scss"],
})
export class TogglePage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}
  pepperoni = true;
  mushrooms = false;
  sausage = false;

  showPageHome() {
    this.navCtrl.navigateForward("home");
  }
}
