import { Action } from "@ngrx/store";
import { Category } from "../models/category";

export enum ActionTypes {
  GET = "GET",
  SET = "SET",
}

export const GET = () => {
  return <Action>{ type: ActionTypes.GET, payload: null };
};



export const SET = (categories: Category[]) => {
  return <Action>{ type: ActionTypes.SET, payload: categories };
};
