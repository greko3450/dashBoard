export const ALL_USER = "ALL_USER";
export const SORT_USER = "SORT_USER";
export const SEARCH_NAME = "SEARCH_NAME"
export const ERRO_NAME ="ERRO_NAME"

export const allUser = () => {
  return async (dispatch) => {
    try {
      let response = await fetch(`http://localhost:3001/user`)
      let dataUser = await response.json();
      if(dataUser) {
        // console.log(dataUser);
        dispatch({
          type: ALL_USER,
          payload: dataUser
        })
        dispatch({
          type: ERRO_NAME,
          payload: alert("name encontrado")
        })
      } else {
        dispatch({
          type: ERRO_NAME,
          payload: alert("name no encontrado")
        })
      }
    } catch (error) {
      console.log("not found user " + error.message)
    }
  }
}


export const sortUser = (ord) => {
  return {
    type: SORT_USER,
    payload: ord

  }
}



export const searchName = (name) => {
  return async (dispatch) => {
    try {
      let response = await fetch(`http://localhost:3001/user?name=${name}`)
      let dataName = await response.json();
      // console.log(dataUser);
      dispatch({
        type: SEARCH_NAME,
        payload: dataName
      })
    } catch (error) {
      console.log("not found user " + error.message)
    }
  }
}