import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-content",
  templateUrl: "./content.page.html",
  styleUrls: ["./content.page.scss"],
})
export class ContentPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  logScrollStart() {
    console.log("logScrollStart");
  }
  logScrolling(event) {
    console.log("logScrolling", event);
  }
  logScrollEnd() {
    console.log("logScrollEnd");
  }
  showPageHome() {
    this.navCtrl.navigateForward("home");
  }
}
