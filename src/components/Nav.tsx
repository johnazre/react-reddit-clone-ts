import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="primary" dark expand="md">
          <NavbarBrand href="/">Reddit Clone</NavbarBrand>
        </Navbar>
      </div>
    )
  }
}
