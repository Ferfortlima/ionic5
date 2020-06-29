import { MealService } from "./../../service/meal/meal.service";
import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Router, ActivatedRoute } from "@angular/router";
import { Meal } from "src/app/models/meal";

@Component({
  selector: "app-meals",
  templateUrl: "./meals.page.html",
  styleUrls: ["./meals.page.scss"],
})
export class MealsPage implements OnInit {
  pageTitle = "";
  meals: Meal[] = [];
  constructor(
    private route: ActivatedRoute,
    private mealService: MealService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((param) => {
      if (param.filter && param.value) {
        this.pageTitle = param.value;
        this.mealService.getMeals(param.filter, param.value).then((meals) => {
          this.meals = meals["meals"];
        });
      }
    });
  }
}
