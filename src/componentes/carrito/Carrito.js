import React, { Component } from 'react'
import ItemCarrito from './itemCarrito'
import { CloseOutlined } from '@ant-design/icons'

class Carrito extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 1,
                    producto: {
                        id: 2,
                        nombre: 'Producto 2',
                        precio: 350
                    },
                    cantidad: 2
                },
                {
                    id: 2,
                    producto: {
                        id: 5,
                        nombre: 'Producto 5',
                        precio: 30
                    },
                    cantidad: 2
                },
                {
                    id: 3,
                    producto: {
                        id: 1,
                        nombre: 'Producto 1',
                        precio: 900
                    },
                    cantidad: 1
                },
                {
                    id: 4,
                    producto: {
                        id: 7,
                        nombre: 'Producto 7',
                        precio: 300
                    },
                    cantidad: 1
                },
                {
                    id: 5,
                    producto: {
                        id: 8,
                        nombre: 'Producto 8',
                        precio: 150
                    },
                    cantidad: 1
                },
            ]
        };
        this.handleCantidad = this.handleCantidad.bind(this)
    }
    handleCantidad($i, $cantidad) {
        console.log($i + " " + $cantidad)
    }
    render() {
        return (
            <div className={"bg-white fixed w-full right-0 shadow-lg transition ease-in-out duration-700 max-w-xs sm:max-w-sm  h-screen " + (this.props.isOpenCart ? 'block' : 'hidden')}>
                <div className="px-3 py-4  flex justify-between">
                    <h2 className="text-gray-800 text-xl ">Mi carrito</h2>
                    <CloseOutlined className="text-xl my-auto" onClick={this.props.openCart} />
                </div>
                <br />
                <div className="p-2 flex justify-center overflow-y-auto relative" style={{ height: '65%' }}>
                    <div className={this.state.items.length < 0 ? 'block' : 'hidden'}>
                        <p className="text-gray-600 text-lg ">No hay elementos.</p>
                    </div>
                    <div className={"w-full h-full" + (this.state.items.length > 0 ? 'block' : 'hidden')}>
                        {
                            this.state.items.map((item, index) =>
                                <ItemCarrito item={item} key={index} />
                            )
                        }
                    </div>
                </div>
                <div className="absolute bottom-0 w-full p-4">
                    <div className="p-3 my-auto">
                        <span className="w-full h-full text-lg text-gray-700">
                            SubTotal:
                        <span className="font-semibold ml-2">
                                ${this.state.items.reduce((a, c) => a + c.producto.precio * c.cantidad, 0)}
                            </span>
                        </span>
                    </div>
                    <div className="p-2 h-16 ">
                        <button className="bg-black text-white w-full py-4 border-2 border-black font-semibold hover:text-black hover:bg-white">Comprar</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Carrito;