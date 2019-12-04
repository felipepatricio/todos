import React, { createContext, useReducer } from 'react'

const initialState = []
const store = createContext(initialState)
const { Provider } = store

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      case 'TOGGLE_TODO':
        return state.map(todo => 
          (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
      default:
        return state
    }
  }, initialState)

  return <Provider value={{state, dispatch}}>{children}</Provider>
}

export { store, StateProvider }