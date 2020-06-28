import { Component, OnInit } from "@angular/core";

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
      icon: "list",
    },
  ];

  constructor() {}

  ngOnInit() {
    const path = window.location.pathname.split("/")[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(
        (page) => page.title.toLowerCase() === path.toLowerCase()
      );
    }
  }
}
