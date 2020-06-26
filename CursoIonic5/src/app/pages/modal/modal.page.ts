import { ModalInternoComponent } from "./../../components/modal-interno/modal-interno.component";
import { Component, OnInit } from "@angular/core";
import { NavController, ModalController } from "@ionic/angular";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.page.html",
  styleUrls: ["./modal.page.scss"],
})
export class ModalPage implements OnInit {
  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController
  ) {}
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalInternoComponent,
    });
    return await modal.present();
  }

  ngOnInit() {}
  showPageHome() {
    this.navCtrl.navigateForward("home");
  }
}
