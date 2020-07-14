import React, { Component } from 'react'
import FiltroTienda from '../../componentes/Filtros/FiltoTienda'
import Producto from '../../componentes/Producto/Producto'

class Tienda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productos: [
                {
                    "id": 0,
                    "nombre": "Producto 0",
                    "precio": "1,836.75"
                },
                {
                    "id": 1,
                    "nombre": "Producto 1",
                    "precio": "3,829.93"
                },
                {
                    "id": 2,
                    "nombre": "Producto 2",
                    "precio": "3,452.87"
                },
                {
                    "id": 3,
                    "nombre": "Producto 3",
                    "precio": "3,617.35"
                },
                {
                    "id": 4,
                    "nombre": "Producto 4",
                    "precio": "3,734.42"
                },
                {
                    "id": 5,
                    "nombre": "Producto 5",
                    "precio": "1,041.44"
                },
                {
                    "id": 6,
                    "nombre": "Producto 6",
                    "precio": "1,041.44"
                },
                {
                    "id": 7,
                    "nombre": "Producto 7",
                    "precio": "1,041.44"
                },
                {
                    "id": 8,
                    "nombre": "Producto 8",
                    "precio": "1,041.44"
                },
                {
                    "id": 9,
                    "nombre": "Producto 9",
                    "precio": "1,041.44"
                },
            ]
        };
    }
    render() {
        return (
            <div className="w-full h-full">
                <div className="flex justify-center pt-10">
                    <h1 className="font-bold text-4xl text-gray-700 mb-5">Tienda</h1>
                </div>
                <div>
                    <FiltroTienda />
                </div>
                <section className="w-full h-full mt-6 my-4 mx-autos">
                    <Producto productos={this.state.productos} />
                </section>
            </div>
        );
    }
}

export default Tienda;