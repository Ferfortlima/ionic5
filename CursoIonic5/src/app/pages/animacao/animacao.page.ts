import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-animacao",
  templateUrl: "./animacao.page.html",
  styleUrls: ["./animacao.page.scss"],
})
export class AnimacaoPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}
  showPageHome() {
    this.navCtrl.navigateForward("home");
  }
}
