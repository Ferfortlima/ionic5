import { Component, OnInit, Input } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "custom-card",
  templateUrl: "./custom-card.component.html",
  styleUrls: ["./custom-card.component.scss"],
})
export class CustomCardComponent implements OnInit {
  @Input() title: string;
  @Input() img: string;
  @Input() customFunc: Function;
  constructor(private navCtrl: NavController) {}

  customFuncHandler(value) {
    this.customFunc(value);
  }

  ngOnInit() {}
}
