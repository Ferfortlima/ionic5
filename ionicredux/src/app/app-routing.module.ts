import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "categories",
    pathMatch: "full",
  },
  {
    path: "categories",
    loadChildren: () =>
      import("./pages/categories/categories.module").then(
        (m) => m.CategoriesPageModule
      ),
  },
  {
    path: "country",
    loadChildren: () =>
      import("./pages/country/country.module").then((m) => m.CountryPageModule),
  },
  {
    path: "meals/:filter/:value",
    loadChildren: () =>
      import("./pages/meals/meals.module").then((m) => m.MealsPageModule),
  },
  {
    path: "meal-detail/:nameMeal/:idMeal",
    loadChildren: () =>
      import("./pages/meal-detail/meal-detail.module").then(
        (m) => m.MealDetailPageModule
      ),
  },
  {
    path: "menu",
    loadChildren: () =>
      import("./pages/menu/menu.module").then((m) => m.MenuPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
