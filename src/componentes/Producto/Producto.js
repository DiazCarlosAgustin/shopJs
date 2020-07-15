import React, { Component } from 'react'

export default class Producto extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 my-4 mx-2 gap-4">
                {
                    this.props.productos.map((pro, index) =>
                        <div className="text-center flex justify-center" key={index}>
                            <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white">
                                <img className="w-full" style={{ height: 'auto' }} src="https://images.unsplash.com/photo-1474376962954-d8a681cc53b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&q=80" alt={pro.nombre} />
                                <div className="px-6 py-2 flex justify-center">
                                    <span className="w-full inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Categoria {index}</span>
                                </div>
                                <div className="px-6 pb-4 text-center">
                                    <span className="font-bold text-xl mb-2">{pro.nombre}</span>
                                </div>
                                <div className="px-6 pb-4 text-center">
                                    <span className="text-lg mb-2">${pro.precio}</span>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}
