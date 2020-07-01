import { Component, OnInit } from "@angular/core";
import { Country } from "src/app/models/country";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { CategoryService } from "src/app/service/category/category.service";
import { FlagService } from "src/app/service/flag/flag.service";
import { ADDCOUNTRY } from "src/app/actions/countryAction";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-country",
  templateUrl: "./country.page.html",
  styleUrls: ["./country.page.scss"],
})
export class CountryPage implements OnInit {
  country$: Observable<Country[]>;

  constructor(
    private store: Store<{ country: Country[] }>,
    private categoryService: CategoryService,
    private flagService: FlagService,
    private navCtrl: NavController
  ) {
    this.country$ = store.pipe(select("country"));
  }

  goToMeals = (value) => {
    this.navCtrl.navigateForward("meals/a" + "/" + value);
  };

  ngOnInit() {
    this.categoryService.getAllCountries().then((data) => {
      data["meals"].map(async (country) => {
        this.flagService
          .getFlag(country.strArea)
          .then((res) => {
            this.store.dispatch(
              ADDCOUNTRY(new Country(country.strArea, res[0].flag))
            );
          })
          .catch((error) => {
            this.store.dispatch(
              ADDCOUNTRY(
                new Country(
                  country.strArea,
                  "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png"
                )
              )
            );
          });
      });
    });
  }
}
