import { AUTH_LOGIN, AUTH_LOGOUT, EDIT_PROFILE } from '../actions/actionTypes'

const initialState = {
  token: null,
  name: null,
  surname: null,
  customer: null,
  role: null,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        token: action.payload.token,
        name: action.payload.name,
        surname: action.payload.surname,
        customer: action.payload.customer,
        role: action.payload.role,
      }
    case AUTH_LOGOUT:
      return {
        ...state,
        token: null,
        name: null,
        surname: null,
        customer: null,
        role: null,
      }
    case EDIT_PROFILE:
      return {
        ...state,
        name: action.payload.name,
        surname: action.payload.surname,
        customer: action.payload.customer,
        role: action.payload.role,
      }
    default:
      return state
  }
}

export default authReducer
