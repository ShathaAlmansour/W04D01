import React, { Component } from 'react'
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import ToDo from "./Components/ToDo"


export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ToDo />
        <Footer />
      </div>
    )
  }
}
