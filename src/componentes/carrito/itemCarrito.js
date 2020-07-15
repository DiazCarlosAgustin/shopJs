import React, { Component } from 'react'
import { DeleteFilled } from '@ant-design/icons'

class ItemCarrito extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        console.log(this.props.item)
    }
    render() {
        return (
            <div className="w-full block">
                <div className="h-full w-full py-2 px-1 flex">
                    <div className="left-0 justify-start my-auto">
                        <img className="rounded-sm w-full h-auto" style={{ height: '72px', width: '72px' }} src="https://images.unsplash.com/photo-1474376962954-d8a681cc53b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&q=80" alt={this.props.item.nombre} />
                    </div>
                    <div className="block w-full px-3 text-gray-700">
                        <div className="w-full flex justify-between">
                            <span className="text-lg font-bold">
                                {this.props.item.producto.nombre}
                            </span>
                            <DeleteFilled className="my-auto cursor-pointer" />
                        </div>
                        <div className="flex justify-between mt-6">
                            <span>Cantidad:
                                <input type="number" className="w-16 ml-3 " defaultValue={this.props.item.cantidad} min="1" />
                            </span>
                            <span>
                                $
                                <span className="pl-2 font-semibold">
                                    {this.props.item.producto.precio * this.props.item.cantidad}
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <sapn className="border block w-100"></sapn>
            </div>
        );
    }
}

export default ItemCarrito;