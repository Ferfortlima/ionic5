import { SET } from "./../../actions/categoryAction";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as URL from "../../constants/url";
import { Category } from "src/app/models/category";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  cat$: Observable<Category[]>;

  constructor(private store: Store<Category[]>, private http: HttpClient) {}
  async getAllCategories() {
    await this.http
      .get(
        `${URL.default.URLCORS}${encodeURIComponent(
          URL.default.HOST + URL.default.categories
        )
          .replace(/'/g, "%27")
          .replace(/"/g, "%22")}`
      )
      .subscribe(
        (data: Category[]) => {
          this.store.dispatch(SET(data));
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
}
