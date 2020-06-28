import { Component, OnInit } from "@angular/core";
import { Country } from "src/app/models/country";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { CategoryService } from "src/app/service/category/category.service";

@Component({
  selector: "app-country",
  templateUrl: "./country.page.html",
  styleUrls: ["./country.page.scss"],
})
export class CountryPage implements OnInit {
  country$: Observable<Country[]>;

  constructor(
    private store: Store<{ country: Country[] }>,
    private categoryService: CategoryService
  ) {
    this.country$ = store.pipe(select("country"));
  }

  async ngOnInit() {
    await this.categoryService.getAllCountries();
  }
}
