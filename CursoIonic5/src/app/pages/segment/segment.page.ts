import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-segment",
  templateUrl: "./segment.page.html",
  styleUrls: ["./segment.page.scss"],
})
export class SegmentPage implements OnInit {
  constructor(private navCtrl: NavController) {}
  segmentSelecionado = "frutas";
  segmentChanged(event) {
    this.segmentSelecionado = event.target.value;
  }
  ngOnInit() {}
  showPageHome() {
    this.navCtrl.navigateForward("home");
  }
}
