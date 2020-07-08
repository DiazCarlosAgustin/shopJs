import React from 'react';
import './Styles/app.css'
import Menu from './componentes/menu/Menu'
import Buscar from './componentes/buscar/Buscar'
import Carrito from './componentes/carrito/Carrito'

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
      <div>
        <header>
          <Menu openSearch={this.openSearch} openCart={this.openCart} isOpen={this.state.isOpen} openMenu={this.openMenu} />
          <Buscar isSearchOpen={this.state.isSearchOpen} />
          <Carrito isOpenCart={this.state.isOpenCart} />
        </header>
      </div>
    );
  }
}

export default App;