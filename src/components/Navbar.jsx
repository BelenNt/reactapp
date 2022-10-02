import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav classname="navbar navbar-expand-lg bg-light">
        <div classname="container-fluid">
          <NavLink classname="navbar-brand" to="/">Navbar</NavLink>
          <button classname="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span classname="navbar-toggler-icon">
            </span></button>
          <div classname="collapse navbar-collapse" id="navbarSupportedContent">
            <ul classname="navbar-nav me-auto mb-2 mb-lg-0">
              <li classname="nav-item">
                <NavLink className={({isActive})=>(isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/HomePages">Sobre Nosotros</NavLink>
              </li>
              <li classname="nav-item">
                <NavLink className={({isActive})=>(isActive ? "nav-link" : "nav-link")} to="/NuestroMenu">Nuestro Menú</NavLink>
              </li>
              <li classname="nav-item">
                <NavLink className={({isActive})=>(isActive ? "nav-link active " : "nav-link")} to="/CrudPages">Reservaciones</NavLink>
              </li>
            </ul>
            <form classname="d-flex" role="search">
              <input classname="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button classname="btn btn-outline-success" type="submit">Search</button>
            </form></div></div></nav>

    </>
  )
}

export default Navbar