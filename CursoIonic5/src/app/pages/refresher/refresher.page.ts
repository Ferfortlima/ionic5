import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-refresher",
  templateUrl: "./refresher.page.html",
  styleUrls: ["./refresher.page.scss"],
})
export class RefresherPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  showPageHome() {
    this.navCtrl.navigateForward("home");
  }
}
