import {ADD_TODO, DELETE_TODO} from "./actions";

export const initialState = {
  loaded: false,
  loading: false,
  data: [{label: 'Eat pizza', complete: false}]
};

export function reducer(
  state = initialState,
  action: { type: string, payload: any }
) {
  console.log({'action.payload':action.payload})
  switch (action.type) {
    case ADD_TODO: {
      const todo = action.payload
      const data = [...state.data, todo]
      return {
        ...state,
        data: data
      }
    }
    case DELETE_TODO: {
      const todo = action.payload
      const data = state.data.filter(elem=> elem.label !==todo.label)
      return {
        ...state,
        data: data
      }
    }
  }
  return state;
}
