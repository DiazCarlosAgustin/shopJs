import React from 'react';
import './Styles/app.css'
import './Styles/index.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Menu from './componentes/menu/Menu'
import Buscar from './componentes/buscar/Buscar'
import Carrito from './componentes/carrito/Carrito'

import Home from './Paginas/Home/Home'
import Acceder from './Paginas/Acceder/Acceder'
import Registrarse from './Paginas/Registrarse/Registrarse'
import Tienda from './Paginas/Tienda/Tienda'
import Contacto from './Paginas/Contacto/Contacto'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchOpen: false,
      isOpenCart: false,
      isOpen: false
    };
    this.openMenu = this.openMenu.bind(this)
    this.openSearch = this.openSearch.bind(this)
    this.openCart = this.openCart.bind(this)
  }
  openMenu() {
    this.setState({
      isOpen: !this.state.isOpen
    })
    if (!this.state.isOpen) {
      this.setState({
        isSearchOpen: false,
        isOpenCart: false
      })
    }
  }
  openSearch() {
    this.setState({
      isSearchOpen: !this.state.isSearchOpen
    })
    if (!this.state.isSearchOpen) {
      this.setState({
        isOpen: false,
        isOpenCart: false
      })
    }
  }
  openCart() {
    this.setState({
      isOpenCart: !this.state.isOpenCart
    })
    console.log(this.state.isOpenCart)
    if (!this.state.isOpenCart) {
      this.setState({
        isOpen: false,
        isSearchOpen: false
      })
    }
  }
  render() {
    return (
      <Router>
        <header className="w-full fixed">
          <Menu openSearch={this.openSearch} openCart={this.openCart} isOpen={this.state.isOpen} openMenu={this.openMenu} />
          <Buscar isSearchOpen={this.state.isSearchOpen} />
          <Carrito isOpenCart={this.state.isOpenCart} />
        </header>
        <div className="bg-gray-100">
          <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/acceder" component={ Acceder } />
            <Route path="/registrarse" component={ Registrarse } />
            <Route path="/Tienda" component={ Tienda } />
            <Route path="/Contacto" component={ Contacto } />
          </Switch>
        </div>
        <footer className="py-4 bg-gray-200 text-center">
          <h1>Derechos reservados 2020</h1>
        </footer>
      </Router>
    );
  }
}

export default App;