import { Component, OnInit } from "@angular/core";
import { NavController, ActionSheetController } from "@ionic/angular";

@Component({
  selector: "app-actionsheet",
  templateUrl: "./actionsheet.page.html",
  styleUrls: ["./actionsheet.page.scss"],
})
export class ActionsheetPage implements OnInit {
  constructor(
    private navCtrl: NavController,
    private actionSheetCtrl: ActionSheetController
  ) {}

  ngOnInit() {}

  showPageHome() {
    this.navCtrl.navigateForward("home");
  }

  async showActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: "Albums",
      cssClass: "my-custom-class",
      buttons: [
        {
          text: "Delete",
          role: "destructive",
          icon: "trash",
          handler: () => {
            console.log("Delete clicked");
          },
        },
        {
          text: "Share",
          icon: "share",
          handler: () => {
            console.log("Share clicked");
          },
        },
        {
          text: "Play (open modal)",
          icon: "caret-forward-circle",
          handler: () => {
            console.log("Play clicked");
          },
        },
        {
          text: "Favorite",
          icon: "heart",
          handler: () => {
            console.log("Favorite clicked");
          },
        },
        {
          text: "Cancel",
          icon: "close",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          },
        },
      ],
    });
    await actionSheet.present();
  }
}
