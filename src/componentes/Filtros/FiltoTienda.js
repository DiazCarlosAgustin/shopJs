import React, { Component } from 'react'
import { CaretUpOutlined, CaretDownOutlined, CloseOutlined } from '@ant-design/icons'

export default class FiltoTienda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false
        };
        this.handlerFiltros = this.handlerFiltros.bind(this)
    }
    handlerFiltros() {
        this.setState({
            collapse: !this.state.collapse
        })
    }
    render() {
        return (
            <div className="block">
                <div className="flex justify-end">
                    <button onClick={this.handlerFiltros} className="mr-5 h-full py-4 px-5 flex">
                        Filtros
                    {this.state.collapse ? <CaretUpOutlined className="my-auto ml-4" /> : <CaretDownOutlined className="my-auto ml-4" />}
                    </button>
                </div>
                <div className={"w-full h-full top-0 pb-5 px-5  mb-5 fixed transition-all ease-linear delay-500 duration-1000 " + (this.state.collapse ? 'block' : 'hidden')}>
                    <div className="max-w-sm bg-white shadow-md w-full h-screen absolute right-0 overflow-y-auto">
                        <div className="flex justify-between p-5">
                            <span className="text-2xl font-bold text-gray-800">Filtros</span>
                            <CloseOutlined className="text-xl my-auto" onClick={this.handlerFiltros} />
                        </div>
                        <div className="p-2 w-full">
                            <div className="w-full p-3">
                                <span className="text-lg">Colores</span>
                                <div className="flex px-2 py-1 flex-wrap w-full">
                                    <div className="py-2 px-3">
                                        <input type="checkbox" className="mr-2" name="check" />
                                        <label className="text-gray-900 my-auto">Color 1</label>
                                    </div>
                                    <div className="py-2 px-3">
                                        <input type="checkbox" className="mr-2" name="check" />
                                        <label className="text-gray-900 my-auto">Color 1</label>
                                    </div>
                                    <div className="py-2 px-3">
                                        <input type="checkbox" className="mr-2" name="check" />
                                        <label className="text-gray-900 my-auto">Color 1</label>
                                    </div>
                                    <div className="py-2 px-3">
                                        <input type="checkbox" className="mr-2" name="check" />
                                        <label className="text-gray-900 my-auto">Color 1</label>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full p-3">
                                <span className="text-lg">Talles</span>
                                <div className="flex px-2 py-1 flex-wrap w-full">
                                    <div className="py-2 px-3">
                                        <input type="checkbox" className="mr-2" name="check" />
                                        <label className="text-gray-900 my-auto">Talles 1</label>
                                    </div>
                                    <div className="py-2 px-3">
                                        <input type="checkbox" className="mr-2" name="check" />
                                        <label className="text-gray-900 my-auto">Talles 1</label>
                                    </div>
                                    <div className="py-2 px-3">
                                        <input type="checkbox" className="mr-2" name="check" />
                                        <label className="text-gray-900 my-auto">Talles 1</label>
                                    </div>
                                    <div className="py-2 px-3">
                                        <input type="checkbox" className="mr-2" name="check" />
                                        <label className="text-gray-900 my-auto">Talles 1</label>
                                    </div>
                                    <div className="py-2 px-3">
                                        <input type="checkbox" className="mr-2" name="check" />
                                        <label className="text-gray-900 my-auto">Talles 1</label>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full p-3">
                                <span className="text-lg">Precio</span>
                                <div className="flex px-2 py-1 flex-wrap w-full">
                                    <div className="my-2 px-3 w-full mr-4">
                                        <label className="text-gray-900 block">Desde</label>
                                        <input type="number" placeholder="Desde" className="rounded py-2 px-3 text-gray-600 shadow appearance-none w-full text-sm" name="precioDesde" />
                                    </div>
                                    <div className="py-2 px-3 w-full mr-4">
                                        <label className="text-gray-900 block">Hasta</label>
                                        <input type="number" placeholder="Hasta" className="rounded py-2 px-3 shadow appearance-none text-gray-600 w-full" name="precioHasta" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full p-3">
                                <span className="text-lg">Ordernar por</span>
                                <div className="flex px-2 py-1 flex-wrap w-full">
                                    <div className="my-2 px-3 w-full mr-4">
                                        <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                            <option selected>Seleccionar una opcion</option>
                                            <option>Precio mas bajo</option>
                                            <option>Precio mas alto</option>
                                            <option>Fecha de publicacion</option>
                                            <option>Por nombre A-z</option>
                                            <option>Por nombre Z-a</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="py-4 px-5 w-full bottom-0">
                            <button className="h-full w-full bg-black hover:bg-white border-2 border-black font-semibold hover:text-black text-white rounded-sm p-3">
                                Aplicar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
