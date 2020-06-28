import { Action } from "@ngrx/store";
import { Category } from "../models/category";

export enum ActionTypes {
  SET = "SET",
}

export const SETCAT = (categories: Category[]) => {
  return <Action>{ type: ActionTypes.SET, payload: categories };
};
