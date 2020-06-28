import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as URL from "../../constants/url";

@Injectable({
  providedIn: "root",
})
export class FlagService {
  constructor(private http: HttpClient) {}

  getFlag(country) {
    return this.http.get(
      `${URL.default.FLAGHOST + country + URL.default.FLAGFILTER}`
    );
  }
}
