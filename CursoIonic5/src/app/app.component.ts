import { Component, OnInit } from "@angular/core";

import { Platform, NavController } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: "Home",
      url: "/home",
      icon: "home",
    },
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
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split("/")[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(
        (page) => page.title.toLowerCase() === path.toLowerCase()
      );
    }
  }
}
