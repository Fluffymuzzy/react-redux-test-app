import { LOADER_ON, LOADER_OFF, ERROR_ON, ERROR_OFF } from "./types";

const initialState = {
  loading: false,
  error: null,
};

export const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADER_ON:
      return {
        ...state,
        loading: true,
      };

    case LOADER_OFF:
      return {
        ...state,
        loading: false,
      };

    case ERROR_OFF:
      return {
        ...state,
        error: null,
      };

    case ERROR_ON:
      return {
        ...state,
        error: action.text,
      };

    default:
      return state;
  }
};
