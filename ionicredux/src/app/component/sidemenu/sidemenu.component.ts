import { Component, OnInit } from "@angular/core";
import { MenuController } from "@ionic/angular";

@Component({
  selector: "sidemenu",
  templateUrl: "./sidemenu.component.html",
  styleUrls: ["./sidemenu.component.scss"],
})
export class SidemenuComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: "Categories",
      url: "/categories",
      icon: "apps",
    },
    {
      title: "Country",
      url: "/country",
      icon: "airplane",
    },
  ];

  constructor(private menu: MenuController) {}

  ngOnInit() {
    const path = window.location.pathname.split("/")[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(
        (page) => page.title.toLowerCase() === path.toLowerCase()
      );
      // var titles = this.appPages.map((page) => page.title.toLowerCase());
      // this.menu.enable(titles.includes(path));
    }
  }
}
