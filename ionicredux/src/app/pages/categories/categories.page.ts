import { GET } from "./../../actions/categoryAction";
import { CategoryService } from "./../../service/category/category.service";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { CategoryModel } from "src/app/models/categoryModel";
import { Category } from "src/app/models/category";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.page.html",
  styleUrls: ["./categories.page.scss"],
})
export class CategoriesPage implements OnInit {
  cat$: Observable<Category[]>;

  constructor(
    private store: Store<{ catMenu: Category[] }>,
    private categoryService: CategoryService
  ) {
    this.cat$ = store.pipe(select("catMenu"));
  }

  async ngOnInit() {
    await this.categoryService.getAllCategories();
  }
}
