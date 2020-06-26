import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-select",
  templateUrl: "./select.page.html",
  styleUrls: ["./select.page.scss"],
})
export class SelectPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}
  customAlertOptions: any = {
    header: "Pizza Toppings",
    subHeader: "Select your toppings",
    message: "$1.00 per topping",
    translucent: true,
  };

  customPopoverOptions: any = {
    header: "Hair Color",
    subHeader: "Select your hair color",
    message: "Only select your dominant hair color",
  };

  customActionSheetOptions: any = {
    header: "Colors",
    subHeader: "Select your favorite color",
  };
  showPageHome() {
    this.navCtrl.navigateForward("home");
  }
}
