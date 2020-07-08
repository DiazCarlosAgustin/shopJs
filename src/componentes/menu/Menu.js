import React, { Component } from 'react'

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        this.openMenu = this.openMenu.bind(this)
    }
    // Maneja si se va a mostrar o no el menu en resoluciones xs
    openMenu() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (
            <nav className="bg-fixed flex items-center justify-between flex-wrap bg-white p-6">
                <div className="flex items-center flex-shrink-0 text-gray-800 mr-6">
                    <span className="font-semibold text-xl tracking-tight">Shop!</span>
                </div>
                <div className="flex lg:hidden">
                    <button className="flex items-center px-3 py-2 text-gray-800 hover:text-gray-600">
                        <span>
                            Search
                        </span>
                    </button>
                    <button className="flex items-center px-3 py-2 text-gray-800 hover:text-gray-600">
                        <span>
                            Cart
                        </span>
                    </button>
                    <button className="flex items-center px-3 py-2 text-gray-800 hover:text-gray-600" onClick={this.openMenu}>
                        <span>
                            {
                                this.state.isOpen ? 'Close' : 'Menu'
                            }
                        </span>
                    </button>
                </div>
                <div className={"w-full flex-grow lg:flex lg:items-center lg:w-auto transition " + (this.state.isOpen ? 'block ease-in-out duration-700' : 'hidden ease-in-out duration-700')}>
                    <div className="text-lg lg:flex-grow text-center lg:text-justify block lg:flex lg:justify-between">
                        <div className="lg:flex">
                            <a href="/" className="lg:px-3 block py-3 lg:py-0 hover:text-gray-600">
                                Inicio
                            </a>
                            <a href="/categorias" className="lg:px-3 block py-3 lg:py-0 hover:text-gray-600">
                                Categoria
                            </a>
                            <a href="/contacto" className="lg:px-3 block py-3 lg:py-0 hover:text-gray-600">
                                Contacto
                            </a>
                        </div>
                        <div className="lg:flex">
                            <span className="hidden lg:flex lg:px-3">
                                Search
                            </span>
                            <span className="hidden lg:flex lg:px-3">
                                Cart
                            </span>
                            <a href="/acceder" className="block lg:flex lg:px-3 py-3 lg:py-0">
                                Acceder
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Menu;