import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as URL from "../../constants/url";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getAllCategories() {
    return this.http
      .get(`${URL.default.HOST + URL.default.CATEGORIES}`)
      .toPromise();
  }

  getAllCountries() {
    return this.http
      .get(`${URL.default.HOST + URL.default.LIST + URL.default.COUNTRY}`)
      .toPromise();
  }
}
