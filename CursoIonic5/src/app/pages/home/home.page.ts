import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { AppComponent } from "src/app/app.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  public appPages = [
    {
      title: "Navegacao",
      url: "/navegacao",
      icon: "list",
    },
    {
      title: "Botões",
      url: "/botoes",
      icon: "construct",
    },
    {
      title: "Alerta",
      url: "/alert",
      icon: "construct",
    },
    {
      title: "ActionSheet",
      url: "/actionsheet",
      icon: "construct",
    },
    {
      title: "Badges",
      url: "/badge",
      icon: "construct",
    },
    {
      title: "Cards",
      url: "/card",
      icon: "construct",
    },
    {
      title: "CheckBox",
      url: "/checkbox",
      icon: "construct",
    },
    {
      title: "Chip",
      url: "/chip",
      icon: "construct",
    },
    {
      title: "Content",
      url: "/content",
      icon: "construct",
    },
    {
      title: "DateTime",
      url: "/datetime",
      icon: "construct",
    },
    {
      title: "FAB",
      url: "/fab",
      icon: "construct",
    },
    {
      title: "Grid",
      url: "/grid",
      icon: "construct",
    },
    {
      title: "Infinite Scroll",
      url: "/infinitescroll",
      icon: "construct",
    },
    {
      title: "Input",
      url: "/input",
      icon: "construct",
    },
    {
      title: "List",
      url: "/list",
      icon: "construct",
    },
    {
      title: "Progress Bar",
      url: "/progressbar",
      icon: "construct",
    },
    {
      title: "Refresher",
      url: "/refresher",
      icon: "construct",
    },
    {
      title: "Reorder",
      url: "/reorder",
      icon: "construct",
    },
    {
      title: "Select",
      url: "/select",
      icon: "construct",
    },
    {
      title: "Toggle",
      url: "/toggle",
      icon: "construct",
    },
    {
      title: "SearchBar",
      url: "/searchbar",
      icon: "construct",
    },
    {
      title: "Segment",
      url: "/segment",
      icon: "construct",
    },
    {
      title: "Slides",
      url: "/slides",
      icon: "construct",
    },
    {
      title: "Toast",
      url: "/toast",
      icon: "construct",
    },
    {
      title: "Modal",
      url: "/modal",
      icon: "construct",
    },
    {
      title: "PopOver",
      url: "/popover",
      icon: "construct",
    },
    {
      title: "Radio",
      url: "/radio",
      icon: "construct",
    },
    {
      title: "Animacao",
      url: "/animacao",
      icon: "construct",
    },
  ];

  constructor(
    private navCtrl: NavController,
    private appComponent: AppComponent
  ) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.appComponent.selectedIndex = 0;
  }

  goToPage(page) {
    var screenSelected = this.appComponent.appPages.findIndex(
      (screen) => screen.url === page
    );
    this.appComponent.selectedIndex = screenSelected;
    this.navCtrl.navigateForward(page);
  }
}
