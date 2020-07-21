import React, { Component } from 'react'
class Producto extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentWillMount() {
        console.log("h")
    }
    render() {
        return (
            <div className="container mx-auto h-full w-full pt-20">
                <section className="w-full h-full pt-10">
                    <div className="text-4xl font-bold text-gray-700 w-full text-center mb-5 block">
                        Producto
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-1 w-full py-5">
                        <div className="bg-red-400 w-full h-full p-3">

                        </div>
                        <div className=" w-full h-full text-center md:text-left p-5">
                            <div className="text-2xl text-gray-800 font-semibold">
                                Nombre producto
                            </div>
                            <div className="text-xl text-gray-800 mt-3">
                                $200.20
                            </div>
                            <div className="text-lg text-gray-800 mt-3">
                                <span className="w-full block">
                                    Colores
                                </span>
                                <select className="text-center bg-white rounded-md shadow-md w-64 p-2">
                                    <option>Seleccionar un color</option>
                                    <option>Rojo</option>
                                    <option>Azul</option>
                                </select>
                            </div>
                            <div className="text-lg text-gray-800 mt-3">
                                <span className="w-full block">
                                    Talles
                                </span>
                                <select className="text-center bg-white rounded-md shadow-md w-64 p-2">
                                    <option>Seleccionar un Talle</option>
                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                </select>
                            </div>
                            <div className="text-lg text-gray-800 mt-3">
                                <span className="w-full block">
                                    Cantidad
                                </span>
                                <input type="number" min="1" max="10" className="w-64 text-gray-700 p-2 text-lg rounded-md shadow-md" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full py-5">
                                <div className="w-full">
                                    <button className="w-full h-full p-3 bg-white rounded-md shadow-md text-gray-800 font-bold">
                                        Agregar a favoritos
                                    </button>
                                </div>
                                <div className="w-full">
                                    <button className="w-full h-full p-3 bg-black rounded-md shadow-md text-white hover:bg-white hover:text-gray-800 font-bold">
                                        Agregar al carrito
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-5">
                        <div className="text-2xl text-gray-800 font-medium text-center">
                            Descripcion
                        </div>
                        <div className="text-gray-700 my-5">
                            Possimus qui distinctio ipsum quia. Sit cumque qui veniam nostrum ipsa est molestias dolor. Qui laudantium nihil ut et qui. Ab nulla ut deleniti sint eveniet beatae. Expedita voluptas autem in. Aut ipsam distinctio.
                            Nostrum quibusdam omnis. Illum voluptatum repellendus dicta vel assumenda. Ratione est occaecati consequuntur laborum natus.
                            Itaque neque maxime architecto. Error ad veniam et et. Nostrum labore est aut reprehenderit ad veritatis ex.
                        </div>
                    </div>
                    <div className="w-full p-5">
                        <div className="text-2xl text-gray-800 font-medium text-center">
                            Informacion adicional
                        </div>
                        <div className="text-gray-700 my-5">
                            Possimus qui distinctio ipsum quia. Sit cumque qui veniam nostrum ipsa est molestias dolor. Qui laudantium nihil ut et qui. Ab nulla ut deleniti sint eveniet beatae. Expedita voluptas autem in. Aut ipsam distinctio.
                            Nostrum quibusdam omnis. Illum voluptatum repellendus dicta vel assumenda. Ratione est occaecati consequuntur laborum natus.
                            Itaque neque maxime architecto. Error ad veniam et et. Nostrum labore est aut reprehenderit ad veritatis ex.
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Producto;