import { Action } from "@ngrx/store";
import { Country } from "../models/country";

export enum ActionTypes {
  SET = "SET",
  ADD = "ADD",
}

export const SETCOUNTRY = (countries: Country[]) => {
  return <Action>{ type: ActionTypes.SET, payload: countries };
};

export const ADDCOUNTRY = (country: Country) => {
  return <Action>{ type: ActionTypes.ADD, payload: country };
};
