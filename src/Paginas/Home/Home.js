import React, { Component } from 'react'
import Productos from '../../componentes/Producto/Producto'
import Categorias from '../../componentes/Categorias/Categoria'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoria: [
                {
                    "id": 0,
                    "nombre": "Categoria 0"
                },
                {
                    "id": 1,
                    "nombre": "Categoria 1"
                },
                {
                    "id": 2,
                    "nombre": "Categoria 2"
                },
                {
                    "id": 3,
                    "nombre": "Categoria 3"
                },
                {
                    "id": 4,
                    "nombre": "Categoria 4"
                },
                {
                    "id": 5,
                    "nombre": "Categoria 5"
                }
            ],
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
                }
            ]
        };
    }
    render() {
        return (
            <div>
                <section className="w-full h-full ">
                    <div className="w-full bg-fixed bg-center bg-cover text-white"
                        style={{
                            height: '100vh',
                            backgroundImage: 'url("https://images.unsplash.com/photo-1511135232973-c3ee80040060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&q=80")'
                        }}
                    >
                    </div>
                </section>
                <section className="w-full h-full mt-6 my-4">
                    <h1 className="text-4xl mb-5 w-full text-center font-bold text-gray-800">Categoria</h1>
                    <Categorias categorias={this.state.categoria} />
                </section>
                <section className="w-full h-full mt-6 my-4">
                    <h1 className="text-4xl mb-5 w-full text-center font-bold text-gray-800">Destacados</h1>
                    <Productos productos={this.state.productos} />
                </section>
            </div>
        );
    }
}

export default Home;