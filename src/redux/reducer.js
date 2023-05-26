import {ALL_USER, SORT_USER, SEARCH_NAME, ERRO_NAME}  from "./actions.js"
const initialStore = {
  userData: [],
  sortOrderedAll: [],
  nameDate: {},
  nameError: null
}

let reducer = (state = initialStore, action) => {
  switch(action.type) {
    case ALL_USER:
    //  const user = action.payload
    //  console.log(user);
      return {
      ...state,
      userData: action.payload,
      sortOrderedAll: action.payload

    }
    case  SORT_USER:
      const userData = [...state.sortOrderedAll];
      const userSorted =  action.payload === "ASC" ? userData.sort((a, b) => {
        return a.name.toUpperCase() < b.name.toUpperCase() ? -1
      : a.name.toUpperCase() > b.name.toUpperCase() ? 1
      : 0 }) :
        action.payload === "DESC" ? userData.sort((a, b) => {
        return a.name.toUpperCase() > b.name.toUpperCase() ? -1
      : a.name.toUpperCase() < b.name.toUpperCase() ? 1 
      : 0 })  : userData
      
       return {
      ...state,
      userData: userSorted
      }
      case SEARCH_NAME:
        return {
          ...state,
          nameDate: action.payload
        }
      case ERRO_NAME:
        return {
          ...state,
          nameError: action.payload
        }
    default: {
      return state
    }
  }
}



export default reducer