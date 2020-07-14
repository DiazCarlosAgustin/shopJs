import React, { Component } from 'react'

class Carrito extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className={"bg-white right-0 shadow-lg absolute transition ease-in-out duration-700 " + (this.props.isOpenCart ? 'block' : 'hidden')} style={{ height: 'calc(100vh - 100px)', width: '300px' }}>
                <div className="pt-3  flex justify-center">
                    <h2 className="text-gray-800 text-lg ">Mi carrito</h2>
                </div>
                <br />
                <div className="p-2 flex justify-center">
                    <p className="text-gray-600 text-lg ">No hay elementos.</p>
                </div>
            </div>
        );
    }
}

export default Carrito;