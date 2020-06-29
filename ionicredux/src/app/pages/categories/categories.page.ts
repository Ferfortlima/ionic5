import { SETCAT } from "./../../actions/categoryAction";
import { CategoryService } from "./../../service/category/category.service";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { Category } from "src/app/models/category";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.page.html",
  styleUrls: ["./categories.page.scss"],
})
export class CategoriesPage implements OnInit {
  cat$: Observable<Category[]>;

  constructor(
    private store: Store<{ catMenu: Category[] }>,
    private categoryService: CategoryService,
    private navCtrl: NavController
  ) {
    this.cat$ = store.pipe(select("catMenu"));
  }

  goToMeals(filter, value) {
    this.navCtrl.navigateForward("meals/" + filter + "/" + value);
  }

  ngOnInit() {
    this.categoryService
      .getAllCategories()
      .then((data: Category[]) => {
        this.store.dispatch(SETCAT(data));
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
