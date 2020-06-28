import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class MealService {
  constructor(private http: HttpClient) {}

  getMeals() {
    var header = {
      headers: new HttpHeaders({
        "Access-Control-Expose-Headers":"",
        "Content-Type": "application/json",
        Accept: "*/*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, PATCH, DELETE, PUT, OPTIONS",
        "Access-Control-Allow-Headers":
          "Accept, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
      }),
    };

    this.http
      .get("http://localhost/cors=https%3A%2F%2Fwww.themealdb.com%2Fapi%2Fjson%2Fv1%2F1%2Fsearch.php%3Ff%3Da", header)
      .subscribe(
        (data) => {
          console.log("then");
          console.log(data);
        },
        (error) => {
          console.log("error");
          console.log(error);
          console.log(error.error);
          console.log(error.status);
          console.log(error.error); // error message as string
          console.log(error.headers);
        }
      );
  }
}
