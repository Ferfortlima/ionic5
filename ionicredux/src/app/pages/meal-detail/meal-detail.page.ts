import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MealService } from "src/app/service/meal/meal.service";
import { Meal } from "src/app/models/meal";
import { FlagService } from "src/app/service/flag/flag.service";

@Component({
  selector: "app-meal-detail",
  templateUrl: "./meal-detail.page.html",
  styleUrls: ["./meal-detail.page.scss"],
})
export class MealDetailPage implements OnInit {
  nameMeal = "";
  flag: "";
  meal: Meal = new Meal();
  constructor(
    private flagService: FlagService,
    private route: ActivatedRoute,
    private mealService: MealService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((param) => {
      if (param.nameMeal && param.idMeal) {
        this.nameMeal = param.nameMeal;
        this.mealService.getMealDetails(param.idMeal).then((meal) => {
          this.meal = meal["meals"][0];
          this.flagService
            .getFlag(this.meal.strArea)
            .then((res) => (this.flag = res[0].flag));
        });
      }
    });
  }
}
