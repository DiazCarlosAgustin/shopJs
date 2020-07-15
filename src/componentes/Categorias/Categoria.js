import React, { Component } from 'react'

class Categoria extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 my-4 gap-4">
                {
                    this.props.categorias.map((cat, index) =>
                        <div className="flex justify-center text-center p-2" key={index}>
                            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
                                <img className="w-full" style={{ height: 'auto' }} src="https://images.unsplash.com/photo-1589710762891-c02dccc83fda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&q=80" alt={cat.nombre} />
                                <div className="px-6 py-2 flex justify-center">
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Categoria</span>
                                </div>
                                <div className="px-6 pb-4 text-center">
                                    <span className="font-bold text-xl mb-2">{cat.nombre}</span>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Categoria;