import { FlagService } from "./../flag/flag.service";
import { ADDCOUNTRY } from "./../../actions/countryAction";
import { SETCAT } from "./../../actions/categoryAction";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as URL from "../../constants/url";
import { Category } from "src/app/models/category";
import { Store } from "@ngrx/store";
import { Country } from "src/app/models/country";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  constructor(
    private flagService: FlagService,
    private storeCat: Store<Category[]>,
    private storeCountry: Store<Country[]>,
    private http: HttpClient
  ) {}
  async getAllCategories() {
    await this.http
      .get(
        `${URL.default.URLCORS}${encodeURIComponent(
          URL.default.HOST + URL.default.CATEGORIES
        )
          .replace(/'/g, "%27")
          .replace(/"/g, "%22")}`
      )
      .subscribe(
        (data: Category[]) => {
          this.storeCat.dispatch(SETCAT(data));
          return data;
        },
        (error) => {
          console.log("error");
          console.log(error);
          console.log(error.error);
          console.log(error.status);
          console.log(error.error);
          console.log(error.headers);
        }
      );
  }

  async getAllCountries() {
    await this.http
      .get(
        `${URL.default.URLCORS}${encodeURIComponent(
          URL.default.HOST + URL.default.LIST + URL.default.COUNTRY
        )
          .replace(/'/g, "%27")
          .replace(/"/g, "%22")}`
      )
      .subscribe(
        (data) => {
          const countries: Country[] = data["meals"].map(async (country) => {
            this.flagService.getFlag(country.strArea).subscribe(
              (res) => {
                this.storeCountry.dispatch(
                  ADDCOUNTRY(new Country(country.strArea, res[0].flag))
                );
              },
              (error) => {
                this.storeCountry.dispatch(
                  ADDCOUNTRY(
                    new Country(
                      country.strArea,
                      "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png"
                    )
                  )
                );
              }
            );
          });
        },
        (error) => {
          console.log("error");
          console.log(error);
          console.log(error.error);
          console.log(error.status);
          console.log(error.error);
          console.log(error.headers);
        }
      );
  }
}
