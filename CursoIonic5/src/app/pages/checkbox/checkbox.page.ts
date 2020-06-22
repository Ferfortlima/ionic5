import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-checkbox",
  templateUrl: "./checkbox.page.html",
  styleUrls: ["./checkbox.page.scss"],
})
export class CheckboxPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  meses: any[] = [
    { nomeDoMes: "Janeiro", valor: 1, marcado: false },
    { nomeDoMes: "Fevereiro", valor: 2, marcado: true },
    { nomeDoMes: "Março", valor: 3, marcado: true },
    { nomeDoMes: "Abril", valor: 4, marcado: false },
    { nomeDoMes: "Maio", valor: 5, marcado: false },
    { nomeDoMes: "Junho", valor: 6, marcado: true },
  ];

  ngOnInit() {}

  showPageHome() {
    this.navCtrl.navigateForward("home");
  }
}
