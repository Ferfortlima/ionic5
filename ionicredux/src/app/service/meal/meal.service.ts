import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as URL from "../../constants/url";

@Injectable({
  providedIn: "root",
})
export class MealService {
  constructor(private http: HttpClient) {}

  getMeals(filter, value) {
    return this.http
      .get(`${URL.default.HOST + URL.default.FILTER + filter}=${value}`)
      .toPromise();
  }

  getMealDetails(idMeal) {
    return this.http
      .get(`${URL.default.HOST + URL.default.MEALDETAIL + idMeal}`)
      .toPromise();
  }
}
