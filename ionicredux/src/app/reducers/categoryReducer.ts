import { ActionModel } from "../models/actionModel";

import { ActionTypes } from "../actions/categoryAction";

export const initialState = [];

export function categoryReducer(state = initialState, action: ActionModel) {
  switch (action.type) {
    case ActionTypes.GET: {
      return state;
    }
    case ActionTypes.SET: {
      return action.payload.categories;
    }

    default:
      return state;
  }
}
