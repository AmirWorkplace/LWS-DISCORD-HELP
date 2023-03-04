import React, { useState } from "react"
import { Provider } from "react-redux"
import "./assets/App.css"
import Index from "./components"
import { store } from "./redux/store"

export const App = () => {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  )
}

export default App
