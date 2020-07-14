import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// iconos
import { CloseOutlined, MenuOutlined, SearchOutlined, ShoppingOutlined } from '@ant-design/icons'

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        return (
            <nav className="flex items-center justify-between flex-wrap bg-white p-6 shadow-md">
                <div className="flex items-center flex-shrink-0 text-gray-800 mr-6">
                    <span className="font-semibold text-xl tracking-tight">Shop!</span>
                </div>
                <div className="flex lg:hidden">
                    <button className="flex items-center px-3 py-2 text-gray-800 hover:text-gray-600">
                        <span onClick={this.props.openSearch}>
                            <SearchOutlined className="align-middle text-lg" onClick={this.props.openSearch} />
                        </span>
                    </button>
                    <button className="flex items-center px-3 py-2 text-gray-800 hover:text-gray-600">
                        <span>
                            <ShoppingOutlined onClick={this.props.openCart} className="align-middle text-lg" />
                        </span>
                    </button>
                    <button className="flex items-center px-3 py-2 text-gray-800 hover:text-gray-600" onClick={this.props.openMenu}>
                        <span>
                            {
                                this.props.isOpen ? <CloseOutlined className="align-middle text-lg" /> : <MenuOutlined className="align-middle text-lg" />
                            }
                        </span>
                    </button>
                </div>
                <div className={"w-full flex-grow lg:flex lg:items-center lg:w-auto transition " + (this.props.isOpen ? 'block ease-in-out duration-700' : 'hidden ease-in-out duration-700')}>
                    <div className="text-lg lg:flex-grow text-center lg:text-justify block lg:flex lg:justify-between">
                        <div className="lg:flex">
                            <Link to="/" className="lg:px-3 block py-3 lg:py-0 hover:text-gray-600 align-middle text-lg">
                                Inicio
                            </Link>
                            <Link to="/Tienda" className="lg:px-3 block py-3 lg:py-0 hover:text-gray-600 align-middle text-lg">
                                Tienda
                            </Link>
                            <Link to="/contacto" className="lg:px-3 block py-3 lg:py-0 hover:text-gray-600 align-middle text-lg">
                                Contacto
                            </Link>
                        </div>
                        <div className="lg:flex">
                            <span className="hidden lg:flex lg:px-3" onClick={this.props.openSearch}>
                                <SearchOutlined className="my-auto" onClick={this.props.openSearch} />
                            </span>
                            <span className="hidden lg:flex lg:px-3">
                                <ShoppingOutlined onClick={this.props.openCart} className="my-auto" />
                            </span>
                            <Link to="/acceder" className="block lg:flex lg:px-3 py-3 lg:py-0 align-middle text-lg">
                                Acceder
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Menu;