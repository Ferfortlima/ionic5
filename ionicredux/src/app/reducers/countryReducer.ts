import { ActionModel } from "../models/actionModel";

import { ActionTypes } from "../actions/countryAction";

export const initialState = [];

export function countryReducer(state = initialState, action: ActionModel) {
  switch (action.type) {
    case ActionTypes.SET: {
      return action.payload.meals;
    }
    case ActionTypes.ADD: {
      const list = [...state];
      list.push(action.payload);
      return list;
    }

    default:
      return state;
  }
}
