import { Component, OnInit } from "@angular/core";

@Component({
  selector: "sidemenu",
  templateUrl: "./menu.page.html",
  styleUrls: ["./menu.page.scss"],
})
export class MenuPage implements OnInit {
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

  constructor() {}

  ngOnInit() {
    const path = window.location.pathname.split("/")[1];
    if (path !== undefined) {
      if (path === "") {
        this.selectedIndex = 0;
      } else {
        this.selectedIndex = this.appPages.findIndex(
          (page) => page.title.toLowerCase() === path.toLowerCase()
        );
      }

      // var titles = this.appPages.map((page) => page.title.toLowerCase());
      // this.menu.enable(titles.includes(path));
    }
  }
}
